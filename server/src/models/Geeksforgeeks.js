const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = 'geeksforgeeks'

const geeksforgeeksSchema = new mongoose.Schema({
    userid:{
        type: String,
        required: true
    },
    handle:{
        type: String,
        required: true
    },
    coding_score : {
        type: String,
        required: true
    },
    total_problems_solved : {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, geeksforgeeksSchema);