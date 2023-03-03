const mongoose = require('mongoose');

const connectToMongo = async ()=>{
    // await mongoose.connect('mongodb://127.0.0.1:27017/TernaWeb');
    const uri = "mongodb+srv://svijay4145:r6dYBUcYWoUNn1bP@cluster0.l3hycto.mongodb.net/TernaWeb?retryWrites=true&w=majority";
    await mongoose.connect(uri);
    console.log('mongoose connected1');
}

connectToMongo().catch(err => console.log(err));


module.exports = connectToMongo;
