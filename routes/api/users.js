const router = require('express').Router();
// Importing our functions from the controllers
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend} = require('../../controllers/userControllers');

// /api/user
router.route('/').get(getUsers).post(createUser)

// /api/user/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;