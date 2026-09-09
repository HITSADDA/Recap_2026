const fs = require('fs')

// Write File vs writeFileSync ->

// Sync....
// fs.writeFileSync('test.txt', "How can i help you")

// Async....
// fs.writeFile('test.txt', "How can i help you teo", (err)=>{
//     if(err){
//         console.log("error: ", err)
//     }else{
//         console.log("Done")
//     }
// })


// readfile vs readFileSync ->
// const data = fs.readFileSync('test.txt', 'utf-8')

// console.log(data)

// readFile -> By default it does't return anything we needed to manully do it
const data = fs.readFile('test.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log("error: ", err)
        return null
    }else{
        console.log(data);
        return data
    }
})


// Copy file to other file 
fs.copyFileSync('test.txt', 'copy.txt')

// Delete file ->
fs.unlinkSync('copy.txt')