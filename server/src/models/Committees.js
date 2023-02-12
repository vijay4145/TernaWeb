const mongoose = require('mongoose');
const { USER } = require('../data/Database');
const DATABASE_TABLE_NAME = "COMMITTE"

const CommitteeSchema = new mongoose.Schema({
    COMMITTEE_NAME:{
        type: String,
        required: true
    },
    COMMITTEE_TAGS:[],
    COMMITTEE_REGISTER_LINK :{
        type: String,
        required: true
    },
    COMMITTEE_DESCRIPTION :{
        type: String,
        required: true
    },
    COMMITTEE_IMAGE_URL : {
        type: String
    },
    COMMITTEE_ADMINS : {
        type: String,
        // ref : USER.DATABASE_TABLE_NAME
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, CommitteeSchema);