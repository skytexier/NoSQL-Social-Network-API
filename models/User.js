const { Schema, model, default: mongoose } = require('mongoose');

const userSchema = new Schema({
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
    
        },
        email: {
            type: String,
            unique: true,
            requred: true,
            match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    });

    userSchema.virtual('friendCount').get(function () {
        return this.friends.length;
    })

    const User = mongoose.model('User', userSchema);
    module.exports = User;
