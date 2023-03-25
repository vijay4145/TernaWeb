const mongoose = require('mongoose');
const { EVENT, USER } = require('../data/Database');


const eventSchema = new mongoose.Schema({
    EVENT_HEADING:{
        type: String,
        required: true
    },
    EVENT_TAGS:[],
    EVENT_REGISTER_LINK :{
        type: String,
        required: true
    },
    EVENT_DESCRIPTION :{
        type: String,
        required: true
    },
    EVENT_IMAGE_URL : {
        type: String
    },
    EVENT_POSTED_BY : {
        type: String,
        // ref : USER.DATABASE_TABLE_NAME
    },
    EVENT_VENUE: {
        type: String,
        required: true
    },
    EVENT_REGISTER_BEFORE: {
        type: Date,
        required: true
    },
    EVENT_START: {
        type: Date,
        required: true
    },
    EVENT_END: {
        type: Date,
        required: true
    },
    LINKEDIN_LINK:{
        type: String,
    },
    MAIL_LINK:{
          type: String,
    },
    DISCORD_LINK:{
          type: String,
    },
    WEBSITE_LINK:{
        type: String,
    }
})

module.exports = mongoose.model(EVENT.DATABASE_TABLE_NAME, eventSchema);