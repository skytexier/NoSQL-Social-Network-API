const { Schema, model, default: mongoose } = require('mongoose');

const thoughSchema = new Schema({
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        reactons: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    });

    userSchema.virtual('friendCount').get(function () {
        return this.friends.length;
    })

    const User = mongoose.model('User', userSchema);
    module.exports = User;