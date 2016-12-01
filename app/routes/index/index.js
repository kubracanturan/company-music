var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome', description: 'Company Music Website' });
});

module.exports = router;
