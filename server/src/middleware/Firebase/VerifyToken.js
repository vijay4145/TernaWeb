const {admin} = require('../../config/firebase-config');

const checkAuthorization = (req, res, next) =>{
    const token = req.headers.authorization;
        const decodeValue = admin.auth().verifyIdToken(token).then(decodedToken =>{
            const uid = decodedToken.uid;
            console.log(uid);
            return next();  

        }).catch((error)=>{
            res.status(401);
            res.json({unauthorized: "token shi nhi h"});
        });


}

module.exports = {checkAuthorization};