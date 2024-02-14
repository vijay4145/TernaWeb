const express = require('express')

//import homeController
const { resourceController } = require('../controller/ResourcesController') 
const router = express.Router(); // New router instance from express library

//routes
// router.get("/gcr/:branch/:semester", resourceController.getGCRLink);
// router.post('/addgcr/:branch/:semester', resourceController.addGCRLink);
// router.post('/get_experiment_url', resourceController.getExperimentUrl);
// router.post('/get_experiment_url_normal', resourceController.getExperimentUrlNormal);

router.get('/get_assignment_experiment_list', resourceController.getBranchSemesterSubjectListAvailable);
router.get('/get_experiment_list/:branch/:semester/:subject', resourceController.getResourceListForThatBranchSemSub);

module.exports = router
