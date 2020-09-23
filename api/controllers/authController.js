import User from '../models/User';

// Signup a user
exports.signUp = async (req, res) => {
  const { fname, lname, email, password } = req.body;

  const newUser = new User({
    fname,
    lname,
    email,
    password,
  });

  await newUser
    .save()
    .then(() => {
      console.log('New created');
      res.status(201).json({ newUser });
      // res.redirect('/admin/dashboard');
    })
    .catch((err) => console.log(err));
};

// Login a user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    console.log('User does not exist!');
  }
  console.log(user);
  res.json({ message: `${user.name} has successfully logged in` });
};
