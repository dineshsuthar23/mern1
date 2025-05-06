const express = require('express');
const { getAllData, createData, updateData, deleteData, getUser, login } = require('../controller/registerCont');
const auth = require('../middleware/auth');
const router = express.Router();


router
    .get('/get',auth, getAllData)
    .get('/get/:eid',getUser)
    .post('/post',createData)
    .post('/login',login)
    .put('/put/:eid',updateData)
    .delete('/delete/:eid', deleteData)

// router.route('/data').get(getAllData).post(post)

module.exports = router