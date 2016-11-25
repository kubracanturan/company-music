const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/companymusic',  (err) => {
    if (err) throw err; else console.log('connected');
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

global.DBDefaults = {};
global.DBModels = {};
let includeModel = (name) => {
    global.DBModels[name] = new (require("./models/" + name + '.js'))(mongoose);
    global.DBDefaults[name] = new (require("./default/" + name + '.js'))(mongoose);
    if (global.DBDefaults[name].create != null) {
        global.DBDefaults[name].create();
    }
};

db.once('open', () => {
    includeModel('user');
});

