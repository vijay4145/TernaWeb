const express = require('express');
const router = express.Router();
const  UserController  = require('../controller/UserController');
const { verifyToken } = require('../middleware/Firebase/VerifyToken')


router.post('/addUser', verifyToken,  UserController.addUser.post);


module.exports = router;