const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port:587,
            auth: {
                user: 'nahariak264@gmail.com',

                pass: 'fcpn gnbt odyb rosr'
            }
        });

        const info = await transporter.sendMail({
            from: '"Study Notion" <nahariak264@gmail.com>',
            to: email,
            subject: title,
            html: body
        });

        // console.log('Info of sent mail - ', info);
        return info;
    }
    catch (error) {
        console.log('Error while sending mail (mailSender) - ', error);
    }
}

module.exports = mailSender;
