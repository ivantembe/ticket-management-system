import env from 'dotenv';
import mongoose from 'mongoose';

env.config();
const { DB_USER } = process.env;
const { DB_PW } = process.env;

const mongodbURI = `mongodb+srv://${DB_USER}:${DB_PW}@node-api.vriow.mongodb.net/ticket-managment-system?retryWrites=true&w=majority`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

const dbConnection = (serverConnection) => {
  mongoose
    .connect(mongodbURI, options)
    .then(() => {
      console.log('>>> Db connected!');
      // eslint-disable-next-line no-unused-expressions
      serverConnection;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

module.exports = dbConnection;
