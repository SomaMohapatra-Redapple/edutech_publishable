const jwt = require('jsonwebtoken');
const secretkey = 'SecretKey';

const profile = (req, res) => {

    jwt.verify(req.token, secretkey, (err, authdata) => {
        if (err) {
            res.send({ result: 'invalid token' })

        }
        else {
            res.send({
                message: 'profile accessed',
                authdata
            })

        }
    })



}

module.exports = profile;