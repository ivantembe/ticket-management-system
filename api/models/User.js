import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  fname: {
    type: String,
    required: [true, 'Please enter your first name'],
  },
  lname: {
    type: String,
    required: [true, 'Please enter your last name'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: [6, 'Minimum password length is 6 characters'],
  },
});

// password hashing before saving user
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = model('User', userSchema);
