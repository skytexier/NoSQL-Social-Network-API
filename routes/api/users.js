const router = require('express').Router();

const { getUsers, getSingleUser, createUser, updateUser, deleteUser} = require('../../controllers/userControllers');

// /api/user
router.route('/').get(getUsers).post(createUser)

// /api/user/:userId
router.route(':userId').get(getSingleUser).put(updateUser).delete(deleteUser)

router.route(':userId/friends/:friendId').post().delete()
