const mongoose = require('mongoose');
const config = require('../config');

const mongooseOptions = {
  useCreateIndex: true,
  useNewUrlParser: true,
};

module.exports = () => {
  mongoose.connect(config.db.mongoDbUri, mongooseOptions)
    .then(() => { console.log('Connected to MongoDB'); })
    .catch(() => { throw new Error('Failed to connect to MongoDB'); });

  mongoose.connection.on('error', error => {
    console.error('MongoDB connection crashed', error);

    throw new Error(error);
  });
};


