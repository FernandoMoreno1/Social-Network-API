const router = require('express').Router();
const ThoughtsRoutes = require('./thoughts-routes');
const UserRoutes = require('./user-routes');

router.use('/users', ThoughtsRoutes)
router.use('/thoughts', UserRoutes)

module.exports = router;