const express = require('express');
const { getAllData } = require('../controller/registerCont');
const router = express.Router();


router
    .get('/data', getAllData)

// router.route('/data').get(getAllData).post(post)

module.exports = router