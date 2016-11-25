class user {
    constructor (mongoose) {
        this.userModel = mongoose.model('User');
        this.peoples =  [
            {
                name: 'kutbettin',
                surname: 'yavuz',
                username: 'bhenav',
                password: '1',
                admin: 1,
                location: 'istanbul',
                meta: {
                    birthday: new Date('12-18-1993'),
                    website: 'kutbettin.com'
                },
                created_at: new Date(),
                updated_at: new Date()
            }
        ];
    }
    create () {
        this.userModel.findOne({username: this.peoples[0].username}, (err, status) => {
            if (err) return console.error(err);
            if (!status) {
                for ( let i = 0; i< this.peoples.length; i++){
                    (new this.userModel(this.peoples[i])).save((err, de, cd) => {
                        if (err) return console.error(err);
                        console.log('Added user --> ' + this.peoples[i].username);
                    });
                }
            } else {
                console.log('there are people');
            }
        });
    }
}

module.exports = user;
