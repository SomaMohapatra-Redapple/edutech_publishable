const Admin_login = require("../models/admin_login");
const admindata = (req, res) => {
    const ad_login = new Admin_login({
        user_name: " Madhav ",
        password: "red_apple"
    });
    ad_login.save().then((result) => {
        res.send(result);
    }).catch((err) => console.log(err));
}

module.exports = admindata;