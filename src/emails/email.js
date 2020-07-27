const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.MAIL_API_KEY)

const welcomemail = (email, name ) =>{
    sendgrid.send({
        to: email,
        from: 'varshitagarwal@gmail.com',
        subject: 'Thank you for sign Up!!',
        text: `Welcome To The Howgert  ${name}.  Get Ready with your wander!!`,
        //html: '<strong> HOWGERT WANDER</strong>',

    })
}

const  removeaccmail = (email, name) =>{
    sendgrid.send({
        to: email,
        from: 'varshitagarwal@gmail.com',
        subject: 'Your Account Has Been Removed !! ',
        text: `Sorry for Incovience  ${name}.  GoodBye !!`   
    })
}

module.exports  = {
    welcomemail,
    removeaccmail
}
