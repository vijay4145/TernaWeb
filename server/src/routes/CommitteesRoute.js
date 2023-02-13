const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/Firebase/VerifyToken')
const { addCommittee } = require('../controller/CommitteeController')


router.post('/addCommittee', verifyToken, addCommittee.post);
router.get('/getCommitteeList', addCommittee.get);
module.exports = router;