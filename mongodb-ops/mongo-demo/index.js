const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connecting to mongoDB:  `mongodb://<domain-name>/<database-name>`

mongoose.connect('mongodb://localhost/demo', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(response => console.log('Connected to MongoDB successfully.'))
        .catch(err => console.error('Error connecting mongoDB', err));


// Describe user document Schema.

const UserSchema = new Schema({
    username: String,
    firstname: String,
    lastname: String,
    age: Number,
    isverified: {type: Boolean, default: false },
    createdat: {type: Date, default: Date.now },
    lastlogin: {type: Date, default: Date.now }
});

// Create User model into db
const User = mongoose.model('User', UserSchema);

// Store/ create document of user.
async function createUser(){
    // Create a new user in db.
    const user = new User({
        username: 'dev-hassan1',
        firstname: 'Hassan',
        lastname: 'Ahmed',
        isverified: true,
        age: 20
    });

    const response = await user.save(); // returns promise so wrap it into async/await
    console.log('Response user creation', response);
}

// Get all documents of user.
async function getAllUser(){
    const users = await User.find();
    console.log('Response users', users);
}


// Filtering query.
async function getQueryBasedUser(){
    const users = await User.find({ username: 'dev-salman' })
    .limit(1)
    .sort({ username: 1 })
    .select({username: 1, isverified: 1});
    console.log('Get query based response', users);
}

// Comparison operators based query
async function getUserBasedOnAge(){
    const users = await User
    .find({ age: { $gt: 15 } }) // get user whose age greater then 15
    .limit(1)
    .sort({ username: 1 })
    .select({username: 1, isverified: 1});
    console.log('Get query based response', users);
}

// Logical operator based query
async function getUserUsingOR(){
    const users = await User
    .find()
    .or([{username: 'dev-salman'}, {age: {$gt: 15 }} ]) // or operator with array contains filter as a objects
    .limit(1)
    .sort({ username: 1 })
    .select({username: 1, isverified: 1});
    console.log('Get query based response', users);
}

// createUser();
// getAllUser()
// getQueryBasedUser()
// getUserBasedOnAge()
getUserUsingOR()




