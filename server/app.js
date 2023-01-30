const express = require('express');
const app = express();
const homeRouter = require('./src/routes/HomeRoute');
const event = require('./src/routes/EventsRoute');
const { verifyToken } = require('./src/middleware/Firebase/VerifyToken');
const UserRoute = require('./src/routes/UserRoute');
const connectToMongo = require('./src/services/Database/DbConnection');

app.use(express.json());
// routers
app.use('/', homeRouter);
// app.use('/events', event);
app.use('/user', UserRoute);

app.get('/auth', verifyToken ,(req, res)=>{
    console.log(req.headers);
    return res.json({greeting: "you are a verified user"});
})

module.exports = app;