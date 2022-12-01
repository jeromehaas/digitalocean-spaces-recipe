const express = require('express');
const { Router } = express;
const router = Router();
const imageRoutes = require('./routes/image');
const viewRoutes = require('./routes/view');

router.use('/image', imageRoutes);
router.use('/', viewRoutes)

module.exports = router;