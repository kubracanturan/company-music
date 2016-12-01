const mongoose = require('mongoose');

class connection {
    constructor() {
        global.DBDefaults = {};
        global.DBModels = {};
        mongoose.connect('mongodb://localhost/companymusic', (err) => {
            if (err) {
                throw err;
            }
            console.log('connected');
            const db = mongoose.connection;
            db.once('open', () => {
                this.includeModel('user');
            });
        });


    }


    includeModel (name){
        global.DBModels[name] = new (require("./models/" + name + '.js'))(mongoose);
        global.DBDefaults[name] = new (require("./default/" + name + '.js'))(mongoose);
        if (global.DBDefaults[name].create != null) {
            global.DBDefaults[name].create();
        }
    }
}
module.exports = connection;