const express = require('express');
const router = express.Router();


router.post('/', function (req, res) {
    console.log();
    if (req.param('username') && req.param('password')) {
        global.DBModels.user.signIn({
            username: req.param('username'),
            password: req.param('password')
        }, function (err, status) {
            if (err) throw err;
            if (status) {
                res.json({
                    message: 'true'
                });
            } else {
                res.json({
                    message: 'false'
                });
            }
        });
    } else {
        res.json({
            message: 'false'
        });
    }
});

module.exports = router;
