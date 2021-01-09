const express = require('express');
const router = express.Router();


const courseArr = [
    {id:1, name: 'courseA'},
    {id:2, name: 'courseB'},
    {id:3, name: 'courseC'},
    {id:4, name: 'courseD'},
    {id:5, name: 'courseE'},
]

// List the course using course id passed in request params.
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const course = courseArr.find( c => c.id === parseInt(id));
    if(!course) res.status(404).send('Course with this ID does not found.');
    res.send(course);
});

// Add course in the courseArr get from request.
router.post('/', (req, res) => {
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

module.exports = router;