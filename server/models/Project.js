import mongoose, { model } from 'mongoose';
import { isEmail } from 'validator';

const { Schema } = mongoose;

// const ticketSchema = new Schema({})
const teamMembers = new Schema({
  fullName: {
    type: String,
    required: [true, 'Please enter full name'],
  },
  email: {
    type: String,
    required: [true, 'Team member email is missing'],
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email'],
  },
  role: { type: String },
});

const projectSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter project name'],
  },
  image: {
    type: String,
  },
  tickets: [],
  teamMembers: [teamMembers],
  creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
});

module.exports = model('Project', projectSchema);
