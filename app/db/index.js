var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/companymusic', function (err) {
    if (err) throw err; else console.log('connected');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    var defaults = {};
    global.DBModels = {};

    DBModels['user'] = require("./models/" + 'user.js')(mongoose);
    defaults['user'] = require("./default/" + 'user.js')(mongoose);

});

