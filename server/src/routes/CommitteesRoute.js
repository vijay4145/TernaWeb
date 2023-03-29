const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/Firebase/VerifyToken')
const { committee } = require('../controller/CommitteeController')


router.post('/addCommittee', verifyToken, committee.post);
router.get('/getCommitteeList', committee.get);
router.get('/:id', committee.getUsingId)
module.exports = router;