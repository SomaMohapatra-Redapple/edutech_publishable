const jwt = require('jsonwebtoken');
const secretkey = 'SecretKey';

const login = (req, res) => {
    user = {
        id: 1,
        user: 'soma',
        password: 'redapple'
    }
    jwt.sign({ user }, secretkey, { expiresIn: '300sec' }, (err, token) => {
        res.json({
            token
        })

    })



    
}

module.exports = login;