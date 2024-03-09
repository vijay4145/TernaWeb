const CodechefDb = require('../models/Codechef');
const GithubDb = require('../models/Github');

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
            const pipeline = [
                { $addFields: { global_rank_int: { $toInt: "$total_commits" } } },
                { $sort: { global_rank_int: -1 } }
            ];
            GithubDb.aggregate(pipeline).then(list=>{
                res.status(200).json(list);
            }).catch(err=>{
                console.log(err);
                res.status(500);
            })
        }catch(err){
            console.log(err);
            res.status(500)
        }
    }
}