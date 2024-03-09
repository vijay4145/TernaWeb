const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = 'github'

const githubSchema = new mongoose.Schema({
    link:{
        type: String,
        required: true
    },
    total_commits : {
        type: String,
        required: true
    },
    total_pull_request : {
        type: String, 
        required: true
    },
    star_earned : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, githubSchema);