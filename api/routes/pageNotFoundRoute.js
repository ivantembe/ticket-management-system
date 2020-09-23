import express from 'express';

const route = express.Router();

route.use((req, res) => {
  console.log('Page not found!');
  res.status(404).json({ message: 'Page not found!' });
});

module.exports = route;
