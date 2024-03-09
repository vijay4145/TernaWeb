const CodechefDb = require('../models/Codechef');
const GithubDb = require('../models/Github');
const GfgDb = require('../models/Geeksforgeeks');
const newgithubuserDb = require('../models/NewGithubUserAddRequest')

module.exports.topcoder = {
    getGeeksForGeeksData : (req, res)=>{
        try{
            const pipeline = [
                { $sort: { "coding_score": -1 } }
            ]
            GfgDb.aggregate(pipeline).then(list=>{
                res.status(200).json(list);
            }).catch(err=>{
                res.status(500);
            })
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
    },
    postNewGithubUserData : (req, res)=>{
        console.log(req.body);
        const data = new newgithubuserDb(req.body);
        data.save().then(item=>{
            res.status(200).json({});
        }).catch(err=>{
            res.status(500);
        })
    }
}