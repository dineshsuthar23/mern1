const User = require('../model/registerModel')

const getAllData = async(req,res)=>{
    const data = await User.find();
    res.send(data)
}

module.exports = {getAllData}