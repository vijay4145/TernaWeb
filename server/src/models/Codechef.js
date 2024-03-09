const { mongoose } = require("mongoose");
const DATABASE_TABLE_NAME = 'codechef'

const codechefSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    country_rank : {
        type: String,
        required: true
    },
    global_rank : {
        type: String, 
        required: true
    },
    html_handle : {
        type: String,
        required: true
    },
    rating : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model(DATABASE_TABLE_NAME, codechefSchema);