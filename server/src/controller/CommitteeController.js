const committeDb = require('../models/Committees');

module.exports.committee = {
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
        const pipeline = [
            {
              $project: {
                _id: 1,
                COMMITTEE_NAME : 1,
                COMMITTEE_TAGS: 1,
                COMMITTEE_IMAGE_URL : 1,
                COMMITTEE_DESCRIPTION : {
                  $concat: [
                    { $substr: ["$COMMITTEE_DESCRIPTION", 0, 35] },
                    { $cond: [{ $gte: [{ $strLenCP: "$COMMITTEE_DESCRIPTION" }, 35] }, "...", ""] }
                  ]
                }
              }
            }
          ];
        committeDb.aggregate(pipeline).then(list=>{
            res.status(200).json(list)
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                success: false
            })
        })
    },

    getUsingId : (req, res)=>{
        const id = req.params.id;
        committeDb.findById(id).then(list=>{
            res.status(200).json(list);
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                success: false
            })
        })
    }
}