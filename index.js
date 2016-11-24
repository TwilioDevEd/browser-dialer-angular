'use strict';
require('dotenv-safe').load();
const http = require('http');
const express = require('express');
const {urlencoded} = require('body-parser');
const twilio = require('twilio');


const app = express();
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));
app.use(urlencoded({extended: false}));

// Generate a Twilio Client capability token
app.get('/token', (request, response) => {
  const capability = new twilio.jwt.Capability(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
  capability.allowClientOutgoing(process.env.TWILIO_TWIML_APP_SID);

  const token = capability.generate();

  // Include token in a JSON response
  response.send({
    token: token,
  });
});

// Create TwiML for outbound calls
app.post('/voice', (request, response) => {
  const twiml = new twilio.TwimlResponse();
  twiml.dial(request.body.number, {
    callerId: process.env.TWILIO_NUMBER,
  });
  response.type('text/xml');
  response.send(twiml.toString());
});

const server = http.createServer(app);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Express Server listening on *:${port}`);
});

module.exports = app;
