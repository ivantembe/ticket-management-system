import mongoose from 'mongoose';
import Project from '../models/Project';
import handleErrors from '../utils/handleErrors';
import User from '../models/User';
import findUserById from '../utils/findUserById';

// get all projects where user is 'onwer' or 'guest'
exports.getProjectsByUserId = async (req, res, next) => {
  // check if user exist in database
  const { userId } = req.params;
  const user = await findUserById(User, userId, res, next);

  Project.find({ 'teamMembers.email': user.email })
    .then((projects) => {
      res.status(200).json({ projects });
    })
    .catch((err) => {
      res.status(400).json({ err });
      next();
    });
};

// create new project
exports.createProject = async (req, res, next) => {
  const { name, creator } = req.body;

  const newProject = new Project({
    name,
    image: 'https://picsum.photos/50',
    creator,
  });

  // check if user exist in database
  const user = await findUserById(User, creator, res, next);

  // start session, saving project & user
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await newProject.teamMembers.push({
      fullName: `${user.fname} ${user.lname}`,
      email: user.email,
      role: 'Owner',
    });
    await newProject.save({ session: sess });
    user.projects.push(newProject);
    await user.save({ session: sess });
    await sess.commitTransaction();
    res.status(201).json({ newProject });
  } catch (err) {
    const errorsObject = { name: '' }; //! TODO: handle errors
    const errors = handleErrors(err, errorsObject);
    res.status(400).json({ errors });
    next();
  }
};
