module.exports.upcomingEvent = {
    get : (req, res) =>{
        res.status(200).json({
            success: true,
            gretting: "Upcoming events succesfully implemented"
        })
    }
}

exports.pastEvents = (req, res) =>{
    res.status(200).json({
        success: true,
        gretting: "pastEvent is listening"
    })
}