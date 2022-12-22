const { User } = require('../models');

module.exports = {
    getUsers(req, res){
        User.find()
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    // Get a single user by _id
    getSingleUser(req, res){
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) => 
        !user ? res.status(404).json({ message: 'No user with that ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },

    //Post a user / Create a user

    createUser(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },

    updateUser(req, res){
        User.updateOne(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
            )
        .then((user) => 
        !user ? res.status(404).json({ message: 'No user with that ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },

    deleteUser(req, res){
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => 
        !user 
        ? res.status(404).json({ message: 'No user with that ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err))

    }
    }