const express = require('express');
const bodyParser = require('body-parser');
const port = process.PORT || 9000;
const db = require('./utils/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

db.execute('SELECT * FROM departments')
.then(resp => {
    console.log("RESULT FROM DB", resp);
})
.catch(err => {
    console.log("ERROR ON ", err);
});


app.listen(port, (err, res) => {
    console.log('Connected to mySQL db', err, res);
});
