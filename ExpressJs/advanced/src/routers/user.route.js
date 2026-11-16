import {Router} from "express"
import { upload } from "../middleware/file-upload.js";
import asyncHandler from "../utils/asyncHandler.utils.js";
import auth from "../middleware/auth.middleware.js";


const router = Router();


router.post('/upload', upload.single('/avatar') ,asyncHandler((req, res, next)=>{
    console.log('jii')
    res.json({message: "Hii"})
}))

export default router;