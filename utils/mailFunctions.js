const sgMail=require('@sendgrid/mail');
const dotenv=require("dotenv");
//const res = require('express/lib/response');
dotenv.config();

sgMail.setApiKey(process.env.SENGRID_API_KEY);

const sendMail=(receiver, sender,msg, subject)=>{
    const msgToSend={
        to:receiver,
        from:sender,
        subject,
        text: msg
    };

    sgMail
        .send(msgToSend)
        .then((response)=>{
            console.log(response);
            //res.send(200);
            return 200;
        })
        .catch((error)=>{
            console.log(error);
            //res.send(500);
            return 500;
        });
}

module.exports={
    sendMail
}
