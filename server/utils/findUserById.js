const findUserById = async (userModel, userId, res, next) => {
  let user;
  try {
    user = await userModel.findById(userId);
  } catch (err) {
    res.status(400).json({ err });
    next();
  }
  if (!user) {
    res.status(400).json({ err: 'Could not find user for provided id' });
    next();
  }

  return user;
};

export default findUserById;
