const bcrypt = require('bcrypt');
const express = require('express');
const mongoose = require('mongoose');
const _ = require('lodash');
const {User, validateUser, userSchema } = require('../models/user');

const router = express.Router();

router.post('/register/', async (req, res) => {
    const { error } = validateUser(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ username: req.body.username, email: req.body.email });
    if(user) return res.status(400).send('user already exists.');

    user = new User(_.pick(req.body, ['username', 'email', 'password']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    res.status(201).send(_.pick(user, ['_id', 'username', 'email']));
});


module.exports = router;