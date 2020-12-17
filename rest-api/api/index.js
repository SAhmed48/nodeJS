require('dotenv').config();

const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const Joi = require('joi');
const logger = require('./middlewares/logger'); // import custom middleware

const port = process.env.PORT || 9000;

const app = express();

// Middlewares
app.use(express.json()); // Add client json data into req.body of server.
app.use(express.urlencoded({ extended: true })); // convert x-www-formdata into key=value&&key=value
app.use(helmet()); // http headers attack.
app.use(morgan('tiny')); // console logging request url.
app.use(express.static('public')) // serve static files from public folder


// custom middleware
app.use(logger);


const courseArr = [
    {id:1, name: 'courseA'},
    {id:2, name: 'courseB'},
    {id:3, name: 'courseC'},
    {id:4, name: 'courseD'},
    {id:5, name: 'courseE'},
]

// home route
app.get('/', (req, res) => {
    res.send('Welcome to rest api.')
});

// route to get users is
app.get('/user/ids', (req, res) => {
    res.send([1,2,3,4,5]);
});

// List the course using course id passed in request params.
app.get('/api/v1/courses/:id', (req, res) => {
    const { id } = req.params;
    const course = courseArr.find( c => c.id === parseInt(id));
    if(!course) res.status(404).send('Course with this ID does not found.');
    res.send(course);
});

// Add course in the courseArr get from request.
app.post('/api/v1/courses/', (req, res) => {
    const validationSchema = {
        name: Joi.string().min(3).required()
    }
    const results = Joi.validate(req.body, validationSchema);
    if(results.error){
        reset.status(400).send(results.error.details[0].message);
    }
    const course = {id: courseArr.length + 1, name: req.body.name };
    courseArr.push(course);
    res.send(course);
});

app.listen(port, () => { console.log('Server Start listening Properly..')});