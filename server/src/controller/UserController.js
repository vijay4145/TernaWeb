const { UserDbService } = require('../services/Database/UserDbService');

module.exports.addUser = {
    post : async (req, res) =>{
        try{
            // console.log(("user email is " + req.body.email));
            UserDbService.pushDataToDb(await req.body, await req.body.email);
            res.status(200);
            res.json("successfull at email " + email);
        }catch(err){
            console.log(err);
            res.status(404);
            res.json('kuch gadbad hua');
        }
    }
}