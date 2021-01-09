const { nextTick } = require("async");

function AsyncMiddleware(handler){
    return async (req, res, next) => {
        try {
            handler(req, res);
        } catch(execption){
            next(execption);
        }
    }
}

module.exports = AsyncMiddleware;