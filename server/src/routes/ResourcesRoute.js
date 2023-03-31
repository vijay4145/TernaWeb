const express = require('express')

//import homeController
const { resourceController } = require('../controller/ResourcesController') 
const router = express.Router(); // New router instance from express library

//routes
router.get("/gcr/:branch/:semester", resourceController.getGCRLink);
router.post('/addgcr/:branch/:semester', resourceController.addGCRLink);
router.post('/get_experiment_url', resourceController.getExperimentUrl);

module.exports = router
