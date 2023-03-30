const GcrLinkDb = require('../models/GcrLink');


module.exports.resourceController = {
    getGCRLink : (req, res)=>{
        const branch = req.param.branch;
        const semester = req.param.semester;
        const pipeline = [
            {
              $project: {
                _id : 0,
                SUBJECT : 1,
                LINK: 1,
              }
            }
          ];
        GcrLinkDb.aggregate(pipeline).then(list=>{
            res.status(200).json(list)
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                success: false
            })
        })
    },

    addGCRLink : (req, res)=>{
        const branch = req.params.branch;
        const semester = req.params.semester;
        let data = {
            BRANCH : branch,
            SEMESTER : semester,
            SUBJECT : req.body.SUBJECT,
            LINK : req.body.LINK
        };
        const gcrlinkmodel = new GcrLinkDb(data);
        gcrlinkmodel.save().then(item=>{
            res.status(200).json(item);
        }).catch(err=>{
            res.status(400).json({
                err
            })
        })
    }
}