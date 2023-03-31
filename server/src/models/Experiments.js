const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = 'experiments'

const experimentSchema = new mongoose.Schema({
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
    EXPERIMENT_NO: {
        type: String,
        required: true
    },
    LINK : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, experimentSchema);