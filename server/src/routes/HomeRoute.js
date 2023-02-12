const express = require('express')

//import homeController
const { home } = require('../controller/HomeController') 
const router = express.Router(); // New router instance from express library

//routes
router.get("/", home.get);

module.exports = router
