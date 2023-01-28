const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, ()=>{
    console.log(`App listening at http://localhost:${process.env.PORT}`);
})