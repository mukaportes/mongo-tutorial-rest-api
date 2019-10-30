const express = require('express');
const setupDb = require('./loaders/db');
const setupDataHandlers = require('./loaders/data-handlers');

const startExpress = (port) => {
  try {
    const app = express();

    setupDataHandlers(app);
    setupDb();

    const server = app.listen(port);
    server.on('error', (error) => { throw new Error(error); });

    console.info(`App is listening on port ${port}`);
  } catch (error) {
    console.error(`App failed to listen on port ${port}`, error);
  }
};

module.exports = startExpress;

