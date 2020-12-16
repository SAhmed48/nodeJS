const logErrors = require('./logger'); // best to store as a const
const logCpuMem = require('./os-module');
const Logger = require('./eventLogger');

// Import built-in modules
const path = require('path');
const fs = require('fs');
const http = require('http');

// EventEmitter Module Demo
const EventEmitter = require('events'); // exporting EventEmitter class
const emitter = new EventEmitter(); // create object

// Event listener
emitter.on('errorLogged', (arg) => {
    console.log('Listening to Error logged', arg);
});

// Raising emit.
emitter.emit('errorLogged', {id: 123, error: 'Error Message...'}); // signaling event has happened.

// End EventEmitter Module Demo

// Import custom created Module
logErrors('Testing Module Import');
logCpuMem();
// End custom created Module.


// Print FS module functionalities output.
console.log('Path of Main APP.JS file:', path.parse(__filename));

fs.readdir('./', (err, files) => {
    if(err) console.log('Error on listing files',err);
    else console.log('Files list:', files);
});

// End FS module functionalities.

// Custom Event Emiiter 
// create a new logger event instance
const logger = new Logger();

// Listening to the event.
logger.on('errorEmit', (args) => {
    console.log("Logging the error:", args);
});

logger.logError('Log errors');
// End of custom Event Emitter



// HTTP Module 
const server = http.createServer((req, res) => {
    res.write("Working fine...");
    res.end();
});

server.on('close', () => {
    console.log('Closing DB connection.')
});

server.listen(9000);