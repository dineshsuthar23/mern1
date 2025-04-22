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
const app = express()
app.use(express.json()) // middleware to parse json data

// app.get()
// app.put()
// app.post()
// app.delete()

let users = [
    {
        id: 45,
        name: "jack",
        age: 20
    },
    {
        id: 46,
        name: "john",
        age: 21
    },
    {
        id: 47,
        name: "jill",
        age: 22
    }
]

app.get('/about', (req, res) => {
    res.json(users)
})

app.post('/', (req, res) => {
    const { id, name, age } = req.body;
    const user = { id, name, age }; 
    users.push(user);
    res.send("User added");
});

app.listen(5001, () => {
    console.log("Server is running on 5001")
})