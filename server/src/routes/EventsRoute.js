const express = require('express');
const router = express.Router();
const {upcomingEvent, pastEvents} = require('../controller/EventController');
const {fetchDataFromFirebaseRealtimeDatabase} = require('../middleware/Firebase/RealtimeDatabase');



// TODO: get data from firebase
// TODO: send response

// router.get("/upcomingEvents",fetchDataFromFirebaseRealtimeDatabase, upcomingEvent);
// router.route("/pastEvents").get(pastEvents);

module.exports = router;