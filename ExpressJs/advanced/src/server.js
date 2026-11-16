import dotenv from 'dotenv';
dotenv.config();
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {rateLimit} from "express-rate-limit"
import asyncHandler from './utils/asyncHandler.utils.js';
import { upload } from './middleware/file-upload.js';
import auth from './middleware/auth.middleware.js';
import { globalMiddlware } from './middleware/errors.middleware.js';
import { CreateAccessToken, CreateRefreshToken } from './utils/tokens.utils.js';
import { cookie_options } from './config.js';

import userRouter from './routers/user.route.js'

const PORT = process.env.PORT;

const app = express();



app.use(cors())
app.use(express.urlencoded())
app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, //10 minutes
    limit: 100
})
app.use(limiter)


app.get('/', auth ,(req, resp) => {
    resp.status(200).json({
        "Message": "Home"
    })
});


app.use('/user', auth,userRouter)

app.post('/login', asyncHandler(async(req, resp, next)=>{
    try {
        const {username, email} = req.body;
        console.log(username, email)

        const access_token = await CreateAccessToken({username, email, createdAt: Date.now().toLocaleString()})
        const refresh_token = await CreateRefreshToken({username, createdAt: Date.now().toLocaleString()})

        if(!access_token || !refresh_token){
            throw new Error("Cannot create tokens")
        }

        resp
        .status(200)
        .cookie("accessToken", access_token, cookie_options)
        .cookie("refreshToken", refresh_token, cookie_options)
        .json({username, email})
    } catch (error) {
        throw new Error('Error: ', error.message)
    }
}))

app.use(globalMiddlware)

app.listen(PORT, () => {
    console.log(`server is running on: http://localhost:${PORT}`)
})