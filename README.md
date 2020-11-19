# Repository Viewer

This is a server-side web application written in JavaScript with
[Express][express] and [Handlebars][handlebars]. It is a test project
that allows you to plan your vote in advance, send an email and SMS noty,
and book time on your calendar to vote.

## Setup

    npm install

Make a copy of the `.template-env` file and call it `.env` then update it with your emaill address, Gmail app password, Twilio auth token, Twilio account SID, and your Twilio phone number.

## Running

    npm start

[express]: https://expressjs.com/
[handlebars]: http://handlebarsjs.com/
