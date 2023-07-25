const express = require('express');
const router = express.Router();
const raceApi = require('../controllers/race_api');
router.post('/create', raceApi.create);
router.delete('/destroy/:id', raceApi.destroy);
router.get('/read', raceApi.read);


module.exports = router;