const workers = [
    {name: "Sena" , age: 23},
    {name: "Duygu" , age: 22},
    {name: "Esma" , age: 18}
]
const list = JSON.stringify(workers ,null ,2)
console.log(list);
const fs = require('fs');
fs.writeFile('workers.json' , list , (err) => {
    if (err) {
        console.log("data can't be written into workers.json");
        return
    }
    console.log("data was written into workers.json");
    
})
