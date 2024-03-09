const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/Firebase/VerifyToken');
const { topcoder } = require('../controller/TopCoderController');

router.get('/geeksforgeeks', topcoder.getGeeksForGeeksData);
router.get('/codechef', topcoder.getCodechefData);

router.get('/github', topcoder.getGithubData);
router.post('/newgithubuser', topcoder.postNewGithubUserData);


module.exports = router;