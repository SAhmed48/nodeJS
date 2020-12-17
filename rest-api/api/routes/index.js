const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.render('index', {title: `Testing APP`, message: 'Hello Pug Templating Engine'});
});

module.exports = router;