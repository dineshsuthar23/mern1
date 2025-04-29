const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern56')
    .then(() => { console.log('Database is conected successfully...') })
    .catch(() => { console.log('Database not connected ----------------------------') })