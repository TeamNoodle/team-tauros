const { Router } = require('express');
require('dotenv').config();
const cron = require('node-cron');
const db = require('../db');

// twilio requirements -- texting api
const accoutSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accoutSid, authToken);

const twilioRoute = Router();


cron.schedule('* * * * *', () => {
  db.checkUpcomingParty()
    .then((result) => {
      result.forEach((party) => {
        client.messages.create({
          body: `The party you've RSVP for: ${party.name} is starting in 10 minutes --Howdy`,
          to: `+1${party.phone}`,
          from: process.env.PHONE_NUMBER,
        });
      });
    })
    .catch((err) => console.log(err, 'this is our error'));
});


twilioRoute.post('/', (req, res) => {
  const { recipient, textmessage } = req.body;
  console.log(recipient, textmessage);
  client.messages.create({
    body: textmessage,
    to: `+1${recipient}`,
    from: process.env.PHONE_NUMBER,
  })
    .then((message) => res.status(200).send(message.body))
    .catch((err) => console.error(err));
});


module.exports = {
  twilioRoute,
};
