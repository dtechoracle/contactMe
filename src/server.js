const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static("App"));
app.use(cors());
app.use(express.json());
app.use("/", router);

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Please start abeg ${PORT}`) );
// router.get("/Contact", (req, res) => {
//     res.send('hello')
//   });

// router.get("/contact", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message; 
//   const mail = {
//     from: name,
//     to: "***************@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };
  const msg = {
    from: "iamezekieljeremiah@gmail.com",
    to: "tinq2mobile@gmail.com",
    subject: "Nodemailer",
    text: "Testing out"
};

nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "example@gmail.com", //Email address that'd be used to send emails
        pass: "**************" //Password gotten from App passwords on Gmail
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

});


