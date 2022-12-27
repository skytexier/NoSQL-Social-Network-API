const { User } = require('../models');

module.exports = {
    getUsers(req, res){
        User.find()
        .select('-__v')
        .then((user) => res.json({user, message: "All users found"}))
        .catch((err) => res.status(500).json(err));
    },

    // Get a single user by _id
    getSingleUser(req, res){
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .then((user) => 
        !user ? res.status(404).json({ message: 'No user with that ID'})
        : res.json({user, message: "Single user found"})
        )
        .catch((err) => res.status(500).json(err))
    },

    //Post a user / Create a user
    createUser(req, res){
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err))
    },
    // Update user
    updateUser(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
            )
        .then((user) => 
        !user ? res.status(404).json({ message: 'No user with that ID'})
        : res.json({user, message: "User deleted"})
        )
        .catch((err) => res.status(500).json(err))
    },
    // Delete User
    deleteUser(req, res){
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) => 
        !user 
        ? res.status(404).json({ message: 'No user with that ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err))

    },
    // Add friend to user friend schema
    addFriend(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: {friends: req.params.friendId} },
            {new: true }
            )
        .then((user) => 
        !user 
        ? res.status(404).json({ message: 'No user with that ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err))

    },
    // Delete friend to user friend schema
    deleteFriend(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: {friends: req.params.friendId} },
            {new: true }
            )
        .then((user) => 
        !user 
        ? res.status(404).json({ message: 'No user with that ID'})
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err))

    }
    }