const User = require('../../models/User');

class UserDbService {
    static async addUserToDb(data){
        let user = new User({
            USER_EMAIL : data.email,
            USER_NAME : data.name,
        });
        if(data.tags)
            user = {...user, TAGS: tags};
        if(data.links)
            user = {...user, LINKS: data.links};
        if(data.profile_pic_url)
            user = {...user, PROFILE_PIC_URL: data.profile_pic_url};
        const savedNote = await user.save();
    }
}

module.exports = { UserDbService };