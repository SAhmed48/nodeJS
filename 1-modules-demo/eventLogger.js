const EventEmitter = require('events');

class Logger extends EventEmitter{

    logError(message){
        this.emit('errorEmit', {id: 123, error: 'Something went wrong.' });
    }
}

module.exports = Logger;