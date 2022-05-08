const router = require('express').Router();

// not sure if it should be 'user' or 'users' remeber to change
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    removeFriend,

} = require('../../controllers/user-controllers')

// /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUsers)

// /api/users/:id
router
    .route('/:id')
    .get(getUsersById)
    .put(updateUsers)
    .delete(deleteUsers)

// /api/users/:id/friends/:friendsId
router
    .route('/:id/friend/:friendId')
    .post(addFriend)
    .delete(removeFriend)