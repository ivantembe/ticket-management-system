import User from '../models/User';
import handleErrors from '../utils/handleErrors';

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
      res.status(201).json({ user });
      // res.redirect('/admin/dashboard');
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

  if (!user) {
    console.log('>>> User with email does not exist');
    res.status(400).json({ error: 'User with email does not exist' });
  } else if (user && user.password !== password) {
    console.log('>>> Wrong password');
    res.status(400).json({ error: 'Wrong password' });
  } else {
    console.log(user);
    res.json({ message: `${user.fname} has successfully logged in` });
  }
};
