import bcrypt from 'bcrypt';

import User from '../models/User';
import handleErrors from '../utils/handleErrors';
import createToken from '../utils/jwtAuth';

const maxAgeCookie = 7 * 24 * 60 * 60 * 1000; // in miliseconds

// signup a user
exports.signUp = async (req, res, next) => {
  const { fname, lname, email, password } = req.body;

  const newUser = new User({
    fname,
    lname,
    email,
    password,
  });

  await newUser
    .save()
    .then((user) => {
      console.log('>>> New user created', user);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAgeCookie });
      res.status(201).json({ user });
    })
    .catch((err) => {
      const errorsObject = { fname: '', lname: '', email: '', password: '' };
      const errors = handleErrors(err, errorsObject);
      res.status(400).json({ errors });
      next();
    });
};

// login a user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      console.log(user._id);
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAgeCookie });
      res.status(200).json({ user: user._id });
    } else {
      console.log('Wrong password');
      res.status(400).json({ error: 'wrong password' });
    }
  } else {
    console.log('user does not exist');
    res.status(400).json({ error: 'user does not exist' });
  }
};
