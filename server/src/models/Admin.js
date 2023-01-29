const mongoose = require('mongoose');
const { ADMIN, USER } = require('../data/Database'); 

const AdminSchema = new mongoose.Schema({
    ADMIN_EMAIL:{
        type:String,
        ref : USER.DATABASE_TABLE_NAME
    },
    ADMIN_LEVEL:{
        type:Number
    }
});

module.exports = mongoose.model(ADMIN.DATABASE_TABLE_NAME, AdminSchema);