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
    },

    get: (req, res)=>{
        committeDb.find({}).then(list=>{
            res.status(200).json(list)
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                failed: true
            })
        });
    }
}