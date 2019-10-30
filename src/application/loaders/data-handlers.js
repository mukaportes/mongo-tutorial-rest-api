const cors = require('cors');
const bodyParser = require('body-parser');

/**
 * @description Sets up default data handlers for an Express app
 * @param {Express} app Express app instance 
 */
module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.json());
};

