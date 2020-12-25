const Joi = require('joi');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 12,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1024
    }
});

const User = mongoose.model('User', userSchema);

function validateUser(user){
    const schema = Joi.object({
        username: Joi.string().min(4).max(12).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(4).max(1024).required()
    });

    return schema.validate(user);
}

module.exports = {
    userSchema,
    User,
    validateUser
}