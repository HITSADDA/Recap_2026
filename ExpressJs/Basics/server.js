import express from "express"
import { test_middleware } from "./middleware/test_middleware.js"
import { global_error_handler } from "./middleware/error_handler.js"
import catchasync from "./utils/catch_async.utils.js"

const app = express()

app.use(express.json())

app.get('/', (req, resp) =>{
    resp.status(200).json({message: "Done"})
})

// app.get('/:id', (req, resp) =>{
//     resp.send({message: `${req.params.id}`})
// })

app.get('/user', (req, resp)=>{
    const que = req.query;
    
    resp.send({message: que.id})
})


app.get('/test-middleware', test_middleware, catchasync(async (req, resp, next)=>{
    const que = req.userId
    console.log(que);
    resp.json({message: que})
}))

app.get('/error', catchasync(async(req, resp, next)=>{
    const error = new Error('New Error found')
    error.statusCode = 400;
    throw error;
}))


app.use(global_error_handler)

app.listen(3000, ()=>console.log('App is Listning on http://localhost:3000'))
