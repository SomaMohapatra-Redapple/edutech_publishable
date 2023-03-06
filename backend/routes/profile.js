const express = require('express');
const profile = require('../controllers/profile');
const router = express.Router();


router.route('/profile').get(profile);
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['Authorization'];
    if (typeof bearerHeader !== 'undefined') {

        const bearer = bearerHeader.split("");
        const token = bearer[1];
        req.token = token;
        next();

    }
    else {
        res.send({
            result: 'Token is not valid'
        })

    }

}

module.exports = router;