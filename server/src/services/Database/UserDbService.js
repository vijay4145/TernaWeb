const User = require('../../models/User');

class UserDbService {
    static async addUserToDb(data){
        const result = await User.find({USER_EMAIL: data.email});
        let user = {
            USER_EMAIL : data.email,
            USER_NAME : data.USER_NAME,
        };
        if(data.tags)
            user = {...user, TAGS: tags};
        if(data.links)
            user = {...user, LINKS: data.links};
        if(data.profile_pic_url)
            user = {...user, PROFILE_PIC_URL: data.profile_pic_url};
        if(result.length > 0){
            await User.updateOne(
                { USER_EMAIL : data.email},
                {$set: user}
            );
        }else{
            user = await new User({...user});
            const savedNote = await user.save();
        }
    }


   
}

module.exports = { UserDbService };