import env from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import authRoutes from './routes/authRoutes';

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// server listen & database connection
env.config();
const { DB_USER } = process.env;
const { DB_PW } = process.env;

const mongodbURI = `mongodb+srv://${DB_USER}:${DB_PW}@node-api.vriow.mongodb.net/ticket-managment-system?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(mongodbURI, options)
  .then(() => {
    console.log('>>> Db connected!');
    app.listen(port, () => {
      console.log(`>>> App running on port ${port}!`);
    });
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

// routes
app.use('/users', authRoutes);
