const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/validation-demo', { useNewUrlParser: true, useUnifiedTopology: true})
.then(response => console.log('Connected to mongodb Successfully.'))
.catch(err => console.log('Error connecting db', err));

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true,
        minlength: 5,
        maxlength: 15,
        // lowercase: true, // lowercase save string
        // uppercase: true, // uppercase save string
        // trim: true // remove spaces and dashes from string
        // match: /pattern/ // want to match any regex
    }, // add validation this field is required.
    userType: {
        type: String,
        required: true,
        enum: ['super_admin','admin', 'normal'] // validator: only these values to store.
    },
    age: Number,
    isAdult: {
        type: Boolean,
        get: v => Math.round(v), // call when we get data
        set: v => Math.round(v), // calls only when we save data 
        required: function () { return this.age > 18 } // arrow functions does not use here because of this scope.
    },
    // Custom validator
    isverified : {
        type: Boolean,
        validate: {
            validator: function (v){
                return type(v) === Boolean;
            },
            message: 'Pass Boolean' // custom validator message.
        }
    },
    // Async validator (Used mostly to do network call like scenario)
    isSuperAdmin : {
        type: Boolean,
        validate: {
            isAsync: true,
            validator: function (v, callback){
                setTimeout(() => {
                    const result = type(v) === Boolean;
                    callback(result);
                }, 4000);
            },
            message: 'Pass Boolean' // custom validator message.
        }
    }

});

const User = mongoose.model('User', userSchema);

async function createUserAncCheckValidation(){
    // Add try catch to handle validation  
    try{
        const user = new User({
            username: 'dev-sal',
            age: 15
        });
        user.validate(); // mongoose function validate fields. Does not return any flag.
        // const userSaved = await user.save();
    } catch (exception){
        console.error('Error on creating user:', exception.message);
    }
}

createUserAncCheckValidation()