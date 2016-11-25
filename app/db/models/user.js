module.exports = function (mongoose) {
    var Schema = mongoose.Schema;

    var userSchema = new Schema({
        name: { type: String, required: true },
        surname: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        admin: Number,
        location: String,
        meta: {
            birthday: Date,
            website: String
        },
        created_at: Date,
        updated_at: Date
    });

    const User = mongoose.model('User', userSchema);

    const getUserById = function (id, callback) {
        User.findById(id, callback);
    };

    const getUserByUsername = function (username, callback) {
        const query = {username: username};
        User.findOne(query, callback);
    };

    const signIn = function (person, callback) {
        User.findOne(person, callback);
    };
    
    return {
        getUserById: getUserById,
        signIn: signIn,
        getUserByUsername: getUserByUsername
    }

};

