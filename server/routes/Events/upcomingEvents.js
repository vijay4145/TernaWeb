const express = require('express');
const router = express.Router();

//TODO 1: get data from firebase
//TODO 2: send response

router.get('/', (req, res)=>{
    res.send("upcoming events here");
})


module.exports = router;