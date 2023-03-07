const mongoose = require("mongoose");
const log = require('../logger');

const url = 'mongodb://localhost:27017/edutech';


async function getData() {
    try {
        const con = await mongoose.connect(url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        log.info("mongodb connected");
        console.log(`hostname: ${con.connection.host}`)
    }
    catch (err) {
        console.log(err)
    }

}
module.exports = getData;
