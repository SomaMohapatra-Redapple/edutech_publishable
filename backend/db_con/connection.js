const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/edutech';


async function getData() {
    try {
        const con = await mongoose.connect(url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("mongodb connected");
        console.log(`hostname: ${con.connection.host}`)
    }
    catch (err) {
        console.log(err)
    }

}
module.exports = getData;
