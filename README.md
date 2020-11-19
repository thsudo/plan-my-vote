# Repository Viewer

This is a server-side web application written in JavaScript with
[Express][express] and [Handlebars][handlebars]. It allows you to
provide the URL to a public GitHub repo and will display open PRs
for that repo along with the user who created the PR and the number
of commits and comments on it. 

## Setup

    npm install

Make a copy of the `.template-env` file and call it `.env` then update it with your emaill address, Gmail app password, Twilio auth token, Twilio account SID, and your Twilio phone number.

## Running

    npm start

## Testing

    npm test

[express]: https://expressjs.com/
[handlebars]: http://handlebarsjs.com/
