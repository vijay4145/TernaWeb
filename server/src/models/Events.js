const mongoose = require('mongoose');
const { EVENT, USER } = require('../data/Database');


const eventSchema = new mongoose.Schema({
    EVENT_HEADING:{
        type: String,
        required: true
    },
    EVENT_SCHEDULE:{
        type: Date,
        default: Date.now
    },
    EVENT_TAGS:{
        type: String
    },
    EVENT_REGISTER_LINK :{
        type: String
    },
    EVENT_DESCRIPTION :{
        type: String
    },
    EVENT_IMAGE_URL : {
        type: String
    },
    EVENT_POSTED_BY : {
        type: String,
        ref : USER.DATABASE_TABLE_NAME
    }
})

module.exports = mongoose.model(EVENT.DATABASE_TABLE_NAME, eventSchema);