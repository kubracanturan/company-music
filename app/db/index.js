// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/companymusic', function (err) {
    if(err) throw err; else console.log('connected');
});

 var db = mongoose.connection;
 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
 console.log('we\'re connected!');
 });
