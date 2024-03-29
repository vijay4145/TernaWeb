const {admin} = require('../../config/firebase-config');

const verifyToken = (req, res, next) =>{
    const token = req.headers.authorization;
        const decodeValue = admin.auth().verifyIdToken(token).then(decodedToken =>{
            const uid = decodedToken.uid;
            req.body.email = decodedToken.email;
            req.body.USER_EMAIL = decodedToken.email;
            next();  

        }).catch((error)=>{
            res.status(401);
            res.json({unauthorized: "token shi nhi h"});
        });
}


module.exports =  { verifyToken };