const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = 'NewGithubUserAddRequest'

const githubSchema = new mongoose.Schema({
    link:{
        type: String,
        required: true
    },
    name : {
        type :String,
        required : true
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, githubSchema);