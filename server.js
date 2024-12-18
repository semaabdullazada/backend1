const express = require('express')
const server = express()
const port = 3000;
server.get('/' , (req , res) => {
    const user = req.query.name
    res.send(`Hello ${user}`)
    // res.send(`Hello user`)
})
server.get('/card' , (req , res) => {
    res.send("Bu route kartlar üçün cavabdehdir")
})
server.get('/client' , (req , res) => {
    res.send("Bu marşrut müştərilər üçün cavabdehdir")
})
server.listen(port , () => {
    console.log(`server is running on port: ${port}`);
    
})