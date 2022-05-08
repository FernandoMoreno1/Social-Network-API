const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//throw and error if route is not found
router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
