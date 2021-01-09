const jwt = require('jsonwebtoken');


function authorizeUser(req, res, next){
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied. No token provided');
    try {
        const decoded = jwt.verify(token, 'privateKeyGenerate');
        req.user = decoded;
        next();
    } catch(exception) {
        res.status(400).send('Invalid token.');
    }
}

module.exports = authorizeUser;