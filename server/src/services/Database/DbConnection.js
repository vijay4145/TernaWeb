const mongoose = require('mongoose');

const connectToMongo = async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/TernaWeb');
    console.log('mongoose connected1');
}

connectToMongo().catch(err => console.log(err));
module.exports = connectToMongo;