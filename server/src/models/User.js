const { mongoose } = require("mongoose");
const { USER } = require('../data/Database');

const userSchema = new mongoose.Schema({
    USER_EMAIL : {
        type: String,
        required: true
    },
    USER_NAME : {
        type : String,
        required: true
    },
    TAGS : {
        type : String
    },
    LINKS : {
        type : String
    },
    PROFILE_PIC_URL : {
        type : String
    }
})

module.exports = mongoose.model(USER.DATABASE_TABLE_NAME, userSchema);