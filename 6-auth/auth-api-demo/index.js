const express = require('express');
const connectDB = require('./db/connect');
const users = require('./routes/users');
const auth = require('./routes/auth');

const port = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/users', users);
app.use('/api/auth', auth);

app.listen(port, () => {
    connectDB((success, kwargs) => {
        if(success){
            console.log('Connected to MongoDB..');
        } else {
            console.log('Failed to connect to MongoDB..');
        }
    });
});