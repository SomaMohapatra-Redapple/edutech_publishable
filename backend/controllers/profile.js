
const jwt = require('jsonwebtoken');
const secretkey = 'SecretKey';

const profile = (req, res) => {

    console.log("hello in profile controller");

    jwt.verify(req.token,secretkey,(err,authData)=>{
        if(err){
            console.log(err);
            res.send({result : "invalid token"})
        }else{
            console.log(success);
            res.json({
                message : "profile accessed",
                authData
            })
        }
    })

    console.log(req);
    console.log(res);
    
}

module.exports = profile;