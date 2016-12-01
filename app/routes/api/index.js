const express = require('express');
// const path = require('path');
const router = express.Router();
const signIn = require('./paths/sign-in');
router.use((req, res, next) => {
    if(req.is('json')){
        next();
    }else {
        res.json({
            message: 'JSON Formatında Olmalı!'
        });
    }
});
router.use('/sign-in', signIn);

module.exports = router;



