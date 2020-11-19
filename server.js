const express = require('express');
const request = require('request-promise');
const path = require('path');
const nodemailer = require('nodemailer');

//twilio
const twilio = require('twilio');

// vars
const states = require('./states.js');
const elections = require('./data.js');

require('dotenv').config()

const twil_client = new twilio(`${process.env.TWILIO_ACCOUNT_SID}`, `${process.env.TWILIO_AUTH_TOKEN}`)

const app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.render('index', {title: 'Plan your vote', states: states});
});

app.post('/plan-my-vote', async (req, res, next) => {
    console.log(req.body);

    res.render('plan-my-vote', {title: `Ballot for ${req.body.state}`, elections: elections});

});

app.post('/send-email', (req, res, next) => {
    console.log(req.body)

    const formatName = (str) => {
        let arr = str.split('-');
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].replace(arr[i].charAt(0),  arr[i].charAt(0).toUpperCase());
        }
        return arr.join(" ");
    } 

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const votingPlan = `Your voting plan:
    - U.S. House District 5: ${formatName(req.body.candidate)}
    - Ballot Measure 2A: ${capitalize(req.body['2A'])}
    - Ballot Measure 2B: ${capitalize(req.body['2B'])}`;

    //EMAIL RELATED
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.APP_PW}`
        }
    });

    const emailText = `Thank you for using Plan to Vote! \n\n Use this calendar event to schedule your time to get to the polls and vote: ${buildCalendarEventLink()}.\n\nHere is a copy of your voting plan. Feel free to print this out and take it to the polls with you or view it on your device at the polls.\n\n${votingPlan}`;

    let mailOptions = {
        from: `${process.env.EMAIL}`,
        to: `${process.env.EMAIL}`,
        subject: 'Your voting plan! Save this email.',
        text: emailText
    };

    console.log(emailText);

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    //SMS RELATED
    const smsText = `Thanks for using plan to vote!\n\n ${votingPlan}`

    twil_client.messages.create({
        to: `+1${req.body.phone}`,
        from: `${process.env.TWILIO_FROM_NUMBER}`,
        body: smsText
    });

    res.render('thanks', {title: "Thank you for planning your vote!"})
});

buildCalendarEventLink = () => {
    const baseLink = 'https://calendar.google.com/calendar/r/eventedit\?';
    const electionDayDate = 20201201;

    const startTime = 'T12:00:00';
    const endTime = 'T14:00:00';
    const text = 'TIME+TO+VOTE:+2020+US+House+District+5+Special+Election';
    const location = 'TBD';
    const details = `Holding+time+to+get+to+the+polls+so+I+can+vote+in+the+2020+special+election\.`;
    var link = baseLink + 'dates=' + electionDayDate + startTime + '/' + electionDayDate + endTime + '&details=' + details + '&location&text=' + text + '&trp=false';
    console.log(link);
    return link;
  }

 


module.exports = app;