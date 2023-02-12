const express = require('express');
const router = express.Router();
const { addEvent } = require('../controller/EventController');
const { verifyToken } = require('../middleware/Firebase/VerifyToken')


// TODO: get data from firebase
// TODO: send response

router.post("/addEvent", verifyToken,  addEvent.post);

module.exports = router;