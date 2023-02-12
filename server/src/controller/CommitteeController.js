const committeDb = require('../models/Committees');

module.exports.addCommittee = {
    post: (req, res)=>{
        const body = req.body;
        const committee = new committeDb(body);
        committee.save().then(item=>{
            res.status(200).json(committee);
        }).catch(err=>{
            res.status(400).json({
                failed: true
            })
        })
    }
}