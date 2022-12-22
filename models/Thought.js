const { Schema, model, default: mongoose } = require('mongoose');
const moment = require('moment');

// Reaction schema manifested here as its only used in the Thought model
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// Reaction getter method for timestamp
reactionSchema.virtual('formattedDate').get(function () {
    return moment(this.createdAt).format('MMM, DD, YYYY')
});

// Thought model / schema
const thoughtSchema = new Schema({
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
            type: String,
            required: true,
        }],
        reactons: [reactionSchema],
    });
// Thought virtual 
    thoughtSchema.virtual('formattedDate').get(function () {
        return moment(this.createdAt).format('MMM, DD, YYYY')
    });

    // Model exports
    const Thought = model('Thought', thoughtSchema);
    module.exports = Thought;