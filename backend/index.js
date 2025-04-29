// const fs = require('fs');  // file system
// console.log("1")
// const ds = fs.writeFileSync('text.txt', 'jack');  // write file synchronously
// console.log(ds)

// fs.writeFile('text.txt', 'jack',(err)=>{console.log(err)})
// fs.readFile('text.txt', 'utf-8', (err, data) => {console.log(data)})

// console.log("2")


// simple web server
// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Welcome to Node.js!');
//         res.end();
//     } else if (req.url === '/about') {
//         res.write('This is the about page.');
//         res.end();
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.write('404 Not Found');
//         res.end();
//     }
// })

// server.listen(5001, () => {
//     console.log("Server is running on port 5001")
// })
const express = require('express')
const mongoose = require("mongoose")
const app = express()
app.use(express.json()) // middleware to parse json data


mongoose.connect('mongodb://localhost:27017/mern56')
    .then(() => { console.log('Database is conected successfully...') })
    .catch(() => { console.log('Database not connected ----------------------------') })

/**
 * name
 * email
 * age
 * password
 */

const sch = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String
})

const User = mongoose.model('user', sch) // user is the collection name in mongodb

app.get('/get', async (req, res) => {
    const data = await User.find();
    res.send(data)
})

app.post('/post', async (req, res) => {
    // const user = new User(req.body)

    const { name, email, age, password } = req.body
    const exist = await User.findOne({ email })
    if (exist) return res.status(400).send("User already exists")
    const user = new User({ name, email, age, password })
    await user.save()
    res.send("User created")

})

app.put('/put/:eid', async (req, res) => {
    const id = req.params.eid;
    const newUser = { age: req.body.age, name: req.body.name, email: req.body.email, password: req.body.password }
    const find = await User.findByIdAndUpdate(id, newUser, { new: true })
    console.log(find)
    if (!find) return res.status(404).send("User not found")
    res.send("User updated")
})

app.delete('/delete/:eid', async (req, res) => {
    const id = req.params.eid
    const find = await User.findByIdAndDelete(id)
    if (!find) return res.status(404).send("User not found")
    res.send("User deleted")
})

// app.get()
// app.put()
// app.post()
// app.delete()

// let users = [
//     {
//         id: 45,
//         name: "jack",
//         age: 20
//     },
//     {
//         id: 46,
//         name: "john",
//         age: 21
//     },
//     {
//         id: 47,
//         name: "jill",
//         age: 22
//     }
// ]

// app.get('/get', (req, res) => {
//     res.json(users)
// })

// app.post('/post', (req, res) => {
//     console.log(req.body)
//     const { id, name, age } = req.body;
//     const user = { id, name, age };
//     users.push(user);
//     res.send("User added");
// });

// app.put('/put/:eid', (req, res) => {
//     const id = req.params.eid;
//     const data = users.find(i => i.id == id)
//     console.log(data.id)
//     data.name = req.body.name
//     data.age = req.body.age
//     res.send('done')
// })

// app.delete('/delete/:eid',(req,res)=> {
//     const id = req.params.eid
//     const data = users.findIndex(i => i.id == id)
//     const u1 = users.splice(data, 1)
//     res.send(u1)
// })

app.listen(5001, () => {
    console.log("Server is running on 5001")
})