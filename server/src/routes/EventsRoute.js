const express = require('express');
const router = express.Router();
const { eventController } = require('../controller/EventController');
const { verifyToken } = require('../middleware/Firebase/VerifyToken')


// TODO: get data from firebase
// TODO: send response

router.post("/addEvent", verifyToken,  eventController.post);
router.get("/getlist",  eventController.get);
router.get('/:event_type/getEventOverviewList', eventController.getOverviewList);
router.get('/:id', eventController.getUsingId)

module.exports = router;