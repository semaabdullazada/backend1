const express = require('express');
const workersServer = express()
const port = 3000;
const fs = require('fs');
fs.readFile('workers.json'  , 'utf8' , (err ,data) => {
    if (err) {
        console.log(err);
        return
        
    }
    const list = JSON.parse(data)
    let view = `<h1>Workers list:</h1>`
    list.forEach(element => {
        view += `<p>Name: ${element.name}, Age: ${element.age}</p>`
    });
    console.log(view);
    workersServer.get('/' , (req , res) => {
        res.send(view)
    })
    
})
workersServer.listen(port , () => {
    console.log(`server is running on port ${port}`);
    
})