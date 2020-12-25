const bcrypt = require('bcrypt');
const Joi = require('joi');
const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const {User } = require('../models/user');
const authorize = require('../middleware/authorize');

const router = express.Router();

function validateAuthReq(req){
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(4).max(1024).required()
    });
    return schema.validate(req);
}

router.get('/test-auth/',authorize, async (req, res) => {
    res.send('Testing successfully.');
});


router.post('/', async (req, res) => {
    const { error } = validateAuthReq(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Invalid email or password.');

    validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid password.');

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).status(201).send(_.pick(user, ['_id', 'email']));
});


module.exports = router;