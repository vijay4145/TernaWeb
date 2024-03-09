const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/Firebase/VerifyToken');
const { topcoder } = require('../controller/TopCoderController');

router.get('/leetcode', topcoder.getLeetCodeData);
router.get('/codechef', topcoder.getCodechefData);
router.get('/github', topcoder.getGithubData);


module.exports = router;