const express = require('express');
// const path = require('path');
const router = express.Router();
const signIn = require('./sign-in');
router.use(function(req, res, next) {
    // if(req.is('json')){
        next();
    // }else {
    //     res.json({
    //         message: 'JSON Formatında Olmalı!'
    //     });
    // }
});
router.use('/sign-in', signIn);

module.exports = router;



