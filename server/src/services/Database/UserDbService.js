const User = require('../../models/User');

class UserDbService {
    static async addUserToDb(data){
        const result = await User.find({USER_EMAIL: data.email});
        let user = {
            USER_EMAIL : data.email,
            USER_NAME : data.USER_NAME,
        };
        if(data.TAGS)
            user = {...user, TAGS: tags};
        if(data.LINKS)
            user = {...user, LINKS: data.LINKS};
        if(data.profile_pic_url)
            user = {...user, PROFILE_PIC_URL: data.PROFILE_PIC_URL};
        if(data.BRANCH)
            user = {...user, BRANCH: data.BRANCH}
        if(data.CURRENT_YEAR)
            user = {...user, CURRENT_YEAR: data.CURRENT_YEAR};
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