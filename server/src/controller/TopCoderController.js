const CodechefDb = require('../models/Codechef');

module.exports.topcoder = {
    getLeetCodeData : (req, res)=>{
        try{

        }catch(err){
            res.status(500);
        }
    },
    getCodechefData : (req, res)=>{
        try{
            const pipeline = [
                { $sort: { "global_rank": 1 } }
            ];
            CodechefDb.aggregate(pipeline).then(list=>{
                res.status(200).json(list);
            }).catch(err=>{
                res.status(500);
            })
        }catch(err){
            res.status(500);
        }
    },
    getGithubData : (req, res)=>{
        try{

        }catch(err){
            res.status(500)
        }
    }
}