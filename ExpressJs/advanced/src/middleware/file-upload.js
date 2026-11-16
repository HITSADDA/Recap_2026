import multer from "multer"
import path from "path"
import fs from 'fs'

const __dirname = import.meta.filename

const UPLOAD_PATH = path.join(__dirname, '..', '..', '/upload')
console.log(UPLOAD_PATH);

if(!fs.existsSync(UPLOAD_PATH)){
    fs.mkdirSync(UPLOAD_PATH, {recursive: true})
}

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, UPLOAD_PATH)
    },
    filename: (_, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
})

export const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        // Accept images only
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    }
})