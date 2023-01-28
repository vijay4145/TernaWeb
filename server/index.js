const express = require('express');
const app = express()
const port = 8000;


app.get('/', (req, res) =>{
    res.send("hello world");
})

// Routes
app.use('/events/upcomingEvents', require('./routes/Events/upcomingEvents'));


app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`);
})