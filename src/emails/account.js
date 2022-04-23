const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//     to: 'divyashreeshetty2108@gmail.com',
//     from: 'divyashreeshetty2108@gmail.com',
//     subject: 'This is my first course!',
//     text: 'random text'
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'divyashreeshetty2108@gmail.com',
        subject: 'This is my first course!',
        text: `random text - ${ name }`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'divyashreeshetty2108@gmail.com',
        subject: 'Goodbye!',
        text: `ending text - ${ name }`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}