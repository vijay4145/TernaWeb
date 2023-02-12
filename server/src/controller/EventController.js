const EventsDb = require('../models/Events');

module.exports.addEvent = {
    post : (req, res) =>{
        const body = req.body;
        const event = new EventsDb(body)
        event.save().then(item=>{
            res.status(200).json(event);
        }).catch(err=>{
            res.status(400).json({
                failed: true
            })
        })
    }
}
