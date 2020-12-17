require('dotenv').config(); // load config from .env file.
const config = require('config'); // config package to load configuration from json

const debug = require('debug')('app:startup');

const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const Joi = require('joi');
const logger = require('./middlewares/logger'); // import custom middleware

const index = require('./routes/index');
const courses = require('./routes/course');

const port = process.env.PORT || 9000;
const app = express();

// Configuration Variables

console.log(`Application name: ${config.get('app-name')}`);
console.log(`Direct mail host: ${config.get('mail.host')}`);
console.log(`Mail Server: ${JSON.stringify(config.get('mail'))}`);

// Setting templating Engine
app.set('view engine', 'pug'); // set template engine to Pug
app.set('views', './views'); // default set dir of views

// Middlewares
app.use(express.json()); // Add client json data into req.body of server.
app.use(express.urlencoded({ extended: true })); // convert x-www-formdata into key=value&&key=value
app.use(helmet()); // http headers attack.

// app.get('env') give us development if it is not set from command line.
if(app.get('env') === 'development'){
    app.use(morgan('tiny')); // console logging request url.
    debug('Morgan enabled debug');
}
app.use(express.static('public')) // serve static files from public folder

// custom middleware
app.use(logger);

// Routes 
app.use('/', index);
app.use('/api/v1/courses', index);

app.listen(port, () => { console.log('Server Start listening Properly..')});