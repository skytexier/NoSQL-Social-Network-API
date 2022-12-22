const { Thought, User } = require('../models');

const thoughtController = {
    getThoughts(req, res){
        Thought.find()
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    // Get a single thought by _id
    getSingleThought(req, res){
            Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) => 
            !thought ? res.status(404).json({ message: 'No thought with that ID'})
            : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },
    //Post a thought / Create a thought

    createThought(req, res){
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: req.body.userId},
                { $push: {thoughts: thought._id} },
                { new: true}
            );
        })
        .then((user) => !user ? res.status(404).json({ message: 'No thought created to that user'})
        : res.json({message: 'Thought created!'}))
        .catch((err) => res.status(500).json(err))
    },

    updateThought(req, res){
        Thought.updateOne(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
            )
        .then((thought) => 
        !user ? res.status(404).json({ message: 'No thought with that ID'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err))
    },

    deleteThought(req, res){
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) => 
        !thought 
        ? res.status(404).json({ message: 'No thought with that ID'})
        : User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId }},
            { new: true}
        ))
        .then((user) => {
        !user 
        ? res.status(404).json({ message: 'No thought/user with that ID'})
        : res.json({message: 'User thought deleted!'})
        })
        .catch((err) => res.status(500).json(err))

    }
}

module.exports = thoughtController;