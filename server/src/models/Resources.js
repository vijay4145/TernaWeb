const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = 'resources'

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
    TYPE : {  // pyp, iat, assignment, experiment
        type : String,
        required : true,
    },
    Page_no : {
        type : String
    },
    NAME : { //assignment_no in case of assignment
        type : String,
        required : true
    },
    URL: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, experimentSchema);