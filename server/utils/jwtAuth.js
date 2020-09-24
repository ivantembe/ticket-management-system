import env from 'dotenv';
import jwt from 'jsonwebtoken';

env.config();
const { JWT_SECRET } = process.env;
const maxAgeJwt = 7 * 24 * 60 * 60; // in seconds

const createToken = (userID) => {
  const token = jwt.sign({ userID }, JWT_SECRET, {
    expiresIn: maxAgeJwt,
  });
  return token;
};
module.exports = createToken;
