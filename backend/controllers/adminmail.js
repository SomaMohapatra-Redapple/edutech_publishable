var nodemailer = require('nodemailer')

const sendmail = async (req, res) => {

    var transporter = await nodemailer.createTransport({
        service: 'e-mail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        secureConnection: false,
        secure: true,
        auth: {
            user: 'ra8088159@gmail.com',
            pass: 'redApple@2023'

        }
    });
    var mailoptions = {
        from: 'ra8088159@gmail.com',
        to: 'soma.mohapatra22@gmail.com',
        subject: '',
        text: ``,
        html: '<b>Hi your mail has been sent<b>'

    };
    await transporter.sendMail(mailoptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res.json(info));
        }

    });

    await transporter.verify((err, success) => {
        if (err) console.error(err);
        console.log('Your config is correct');
    });
}

module.exports = sendmail;