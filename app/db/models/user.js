class user {
    constructor (mongoose) {
        const schema = mongoose.Schema;
        const userSchema = schema({
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
        this.user = mongoose.model('User', userSchema);
    }

    getUserById (id, callback) {
        this.user.findById(id, callback);
    }

    getUserByUsername (username, callback) {
        const query = {username: username};
        this.user.findOne(query, callback);
    }

    signIn (person, callback) {
        this.user.findOne(person, callback);
    }
}



module.exports = user;

