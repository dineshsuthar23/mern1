const User = require('../model/registerModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getAllData = async (req, res) => {
    const data = await User.find();
    res.send(data)
}

const getUser = async (req, res) => {
    const id = req.params.eid
    const find = await User.findById(id)
    if (!find) return res.status(404).send("User not found")
    res.send(find)
}

// registetr api
const createData = async (req, res) => {
    try {
        // const user = new User(req.body)

        const { name, email, age, password } = req.body
        const exist = await User.findOne({ email })
        if (exist) return res.send("User already exists")

        const hashedPassword = await bcrypt.hash(password, 10)
        if (!hashedPassword) return res.send("Getting Error while saving the password")
        const user = new User({ name, email, age, password: hashedPassword })
        await user.save()
        // res.send("User created")
        res.json({ success: true, message: "User created" })

    } catch (error) {
        console.log(error)
        // res.send("Getting Error in post API", error)
        res.json({ success: false, message: "Getting Error in post API", error })
    }
}

// login api
const login = async (req, res) => {
    const { email, password } = req.body
    const exist = await User.findOne({ email })
    if (!exist) return res.status(404).send("User not found")
    const isMatch = await bcrypt.compare(password, exist.password)
    if (!isMatch) return res.status(400).send("Invalid credentials")
    const TU = {
        name: exist.name,
        email: exist.email
    }

    const token1 = await jwt.sign(TU,'secretkey',{expiresIn:'1h'})
    // res.cookies(token1)
    res.json({
        success:true,
        message:"Login success",
        token:token1,
    })
}

const updateData = async (req, res) => {
    const id = req.params.eid;
    const newUser = { age: req.body.age, name: req.body.name, email: req.body.email, password: req.body.password }
    const find = await User.findByIdAndUpdate(id, newUser, { new: true })
    console.log(find)
    if (!find) return res.status(404).send("User not found")
    res.send("User updated")
}

const deleteData = async (req, res) => {
    const id = req.params.eid
    const find = await User.findByIdAndDelete(id)
    if (!find) return res.status(404).send("User not found")
    res.send("User deleted")
}
module.exports = { getAllData, deleteData, updateData, createData, getUser,login }