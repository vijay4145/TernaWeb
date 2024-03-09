const express = require('express');
const app = express();
const homeRouter = require('./src/routes/HomeRoute');
const eventsRoute = require('./src/routes/EventsRoute');
const committeeRoute = require('./src/routes/CommitteesRoute');
const { verifyToken } = require('./src/middleware/Firebase/VerifyToken');
const UserRoute = require('./src/routes/UserRoute');
const ResourceRouter = require('./src/routes/ResourcesRoute')
const connectToMongo = require('./src/services/Database/DbConnection');
const TopCoderRoute = require('./src/routes/TopCoderRoute');
require('./src/models/Geeksforgeeks')
require('dotenv').config();

const cors = require('cors');
const corsOptions ={
    origin:process.env.ALLOW_ACCESS_TO_URL, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());

// routers
app.use('/', homeRouter);
app.use('/events', eventsRoute);
app.use('/committees', committeeRoute);
app.use('/user', UserRoute);
app.use('/resources', ResourceRouter);
app.use('/topcoders', TopCoderRoute);

app.get('/auth', verifyToken ,(req, res)=>{
    console.log(req.headers);
    return res.json({greeting: "you are a verified user"});
})

module.exports = app;