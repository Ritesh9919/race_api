const express = require('express');
const router = express.Router();
router.use('/api', require('./race_api'));


module.exports = router;