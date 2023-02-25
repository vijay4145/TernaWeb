const express = require('express');
const router = express.Router();
const  UserController  = require('../controller/UserController');
const { verifyToken } = require('../middleware/Firebase/VerifyToken')


router.post('/addUser', verifyToken,  UserController.user.post);
router.get('/userDetail', verifyToken, UserController.user.get)


module.exports = router;