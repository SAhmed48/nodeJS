
// custom middleware function
const loggingMiddlewareFnc = (req, res, next) => { 
    console.log('Logging Middleware Function.'); 
    next(); // pass control to next route middleware
};

module.exports = loggingMiddlewareFnc;