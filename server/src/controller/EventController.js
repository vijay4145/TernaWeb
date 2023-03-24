const EventsDb = require('../models/Events');

module.exports.eventController = {
    post : (req, res) =>{
        const body = req.body;
        body.EVENT_POSTED_BY = req.body.email;
        const event = new EventsDb(body)
        event.save().then(item=>{
            res.status(200).json(event);
        }).catch(err=>{
            res.status(400).json({
                failed: true
            })
        })
    },
    get : (req, res)=>{
        EventsDb.find({}).then(list=>{
            res.status(200).json(list)
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                success: false
            })
        });
    },

    getUsingId : (req, res)=>{
        const id = req.params.id;
        EventsDb.findById(id).then(list=>{
            res.status(200).json(list);
        }).catch(err=>{
            console.log(err);
            res.status(400).json({
                success: false
            })
        })
    }
}
