var nodemailer = require('nodemailer');

const sendmail=(tomail,otp)=>{
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rohankvr12@gmail.com',
      pass: '@Rohan7898'
    }
  });

  var mailOptions = {
    from: 'rohankvr12@gmail.com',
    to: tomail,
    subject: 'OTP to change password',
    text: `${otp}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
 });
}


sendmail('venkatarohank@gmail.com' ,'1234')