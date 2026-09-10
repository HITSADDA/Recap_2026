import fs from 'fs'
import path from 'path'
import express from 'express' 


const app = express()


app.get('/', (req, res)=>{
    const stream = fs.createReadStream('input.txt', 'utf-8');
    stream.on('data', (chunk)=>res.write(chunk))
    stream.on('end', ()=>res.end())
})

app.listen(3000, ()=>console.log(`app is running on http://localhost:3000`))