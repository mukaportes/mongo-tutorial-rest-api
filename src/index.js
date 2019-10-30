const startApp = require('./application');

const defaultAppPort = 3000;
const appPort = process.env.APP_PORT || defaultAppPort;

startApp(appPort);