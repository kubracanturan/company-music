const express = require('express');
const path = require('path');
const router = express.Router();
const api = require(path.join(__dirname, 'api', 'index'));

router.get('/', (req, res) => {
    res.render('index', { title: 'Welcome', description: 'Company Music Website' });
});

router.use('/api', api);

module.exports = router;
