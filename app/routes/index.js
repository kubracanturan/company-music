var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { title: 'Welcome', description: 'Company Music Website' });
});

module.exports = router;
