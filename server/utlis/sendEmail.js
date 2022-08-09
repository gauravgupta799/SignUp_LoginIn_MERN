const nodemailer = require('nodemailer');
const { User } = require('../models/user');


const sendMail = async (email,subject, text) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yy = today.getFullYear();
    today = `${dd}/${mm}/${yy}`;

    try{
        let transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service:process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.SECURE), // true for 465, false for other ports
            auth: {
              user: process.env.USER, 
              pass: process.env.PASS, 
            },
          });   
          
          await transporter.sendMail({
            from: `👻 ${process.env.USER}`, // sender address
            to: email, 
            date: today,
            subject: subject, // Subject line
            text: text, // plain text body
            html: `<b>Hello ${email}</b>` // html body
          });
          console.log("Email sent successfully!");
    }catch(err){
        console.log("Email not sent!");
        console.log(err);

    }
}

module.exports = sendMail;