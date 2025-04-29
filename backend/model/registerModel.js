
const mongoose = require('mongoose');

const sch = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String
})

const User = mongoose.model('user', sch)

module.exports = User