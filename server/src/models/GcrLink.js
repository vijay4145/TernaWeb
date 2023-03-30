const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = 'gcrlink'

const gcrLinkSchema = new mongoose.Schema({
    SEMESTER:{
        type: String,
        required: true
    },
    BRANCH : {
        type: String,
        required: true
    },
    SUBJECT : {
        type: String, 
        required: true
    },
    LINK : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, gcrLinkSchema);