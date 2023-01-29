const express = require('express');
const app = express();
const home = require('./src/routes/HomeRoute');
const event = require('./src/routes/EventsRoute');
const {checkAuthorization } = require('./src/middleware/Firebase/VerifyToken');

// routers
app.use('/', home);
app.use('/events', event);

app.get('/auth', checkAuthorization,(req, res)=>{
    console.log(req.headers);
    return res.json({greeting: "you requested for login"});
})

module.exports = app;