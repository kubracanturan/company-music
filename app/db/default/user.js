module.exports = function (mongoose) {
    const User = mongoose.model('User');
    const bhenav = {
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
    };

    const returnObj = {
        create: function () {
            User.findOne({username: bhenav.username}, function(err, status) {
                if (err) return console.error(err);
                if (!status) {
                    (new User(bhenav)).save(function(err, de, cd) {
                        if (err) return console.error(err);
                        console.log('Added user --> Bhenav');
                    });
                }
            });
        }
    };
    returnObj.create();

    return returnObj;
};
