import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import dbConnection from './utils/dbConfig';

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(cookieParser());

// server listen & database connection
dbConnection(
  app.listen(port, () => {
    console.log(`>>> App running on port ${port}!`);
  })
);

// routes
app.use('/users', authRoutes);
app.use('/projects', projectRoutes);
