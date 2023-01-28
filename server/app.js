const express = require('express');
const app = express();
const home = require('./src/routes/HomeRoute');


// routers
app.use('/', home);

module.exports = app;