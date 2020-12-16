require('dotenv').config();
const express = require('express');


const port = process.env.PORT || 9000;

const app = express();

// home route
app.get('/', (req, res) => {
    res.send('Welcome to rest api.')
});

// route to get users is
app.get('/user/ids', (req, res) => {
    res.send([1,2,3,4,5]);
});


app.listen(port, () => { console.log('Server Start listening Properly..')});