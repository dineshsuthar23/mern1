const express = require('express');
require('./config/mongo')
const cors = require('cors')

const router = require('./router/router');
const app = express();
app.use(express.json());
const port = 5001

app.use(cors())
app.use('/api',router)

app.listen(port, ()=>{
    console.log("Server is running on port 5001")
})