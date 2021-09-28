//Simple Node.js Sender
//Using npm dotenv&nodemailer
//Works only for gmail.com`s
require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions = {
    from: "From which mail@gmail.com",
    to: "to@gmail.com",
    subject: "Subject Title",
    text: "Text here"
}   

transporter.sendMail(mailOptions)