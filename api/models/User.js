import { Schema, model } from 'mongoose';
import { isEmail } from 'validator';

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

module.exports = model('User', userSchema);
