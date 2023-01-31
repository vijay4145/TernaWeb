const { UserDbService } = require('../services/Database/UserDbService');

module.exports.addUser = {
    post : async (req, res) =>{
        try{
            UserDbService.addUserToDb(req.body);
            res.status(200);
            res.json({email : res.body.email});
        }catch(err){
            console.log(err);
            res.status(404);
            res.json('kuch gadbad hua');
        }
    }
}