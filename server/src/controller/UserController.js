const User = require('../models/User');
const { UserDbService } = require('../services/Database/UserDbService');

module.exports.user = {
    post : async (req, res) =>{
        try{
            UserDbService.addUserToDb(req.body);
            res.status(200);
            res.json({success: true});
        }catch(err){
            console.log(err);
            res.status(404);
            res.json('kuch gadbad hua');
        }
    },

    get : async (req, res) =>{
        try{
            const email = req.body.email;
            const details = await User.findOne({USER_EMAIL: email});
            res.status(200);
            res.json(details);
        }catch(err){

        }
    },

    getUsingId : async (req, res)=>{
        try{
            const email = req.params.id + '@gmail.com';
            const details = await User.findOne({USER_EMAIL: email});
            res.status(200);
            res.json(details);
        }catch(err){
            res.status(404);
            res.json({
                success: false
            })
        }
    }
}