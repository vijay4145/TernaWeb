const express = require('express');
const app = express();
const homeRouter = require('./src/routes/HomeRoute');
const eventsRoute = require('./src/routes/EventsRoute');
const committeeRoute = require('./src/routes/CommitteesRoute');
const { verifyToken } = require('./src/middleware/Firebase/VerifyToken');
const UserRoute = require('./src/routes/UserRoute');
const connectToMongo = require('./src/services/Database/DbConnection');

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
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

app.get('/auth', verifyToken ,(req, res)=>{
    console.log(req.headers);
    return res.json({greeting: "you are a verified user"});
})

module.exports = app;