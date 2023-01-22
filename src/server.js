const nodemailer = require('nodemailer');

const msg = {
    from: "example@gmail.com",
    to: "receiver@gmail.com",
    subject: "Nodemailer",
    text: "Testing out"
};

nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "example@gmail.com",
        pass: "***********" //This should be the password generated from Apps password from google
    },
    port: 465,
    host: 'smtp.gmail.com'
})

.sendMail(msg , (err)=>{
    if (err) {
        return console.log('Error occurs', err);
    }else{
        return console.log('Email Sent');
    }
})
