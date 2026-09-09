import {createReadStream, createWriteStream} from 'fs'
import path from 'path'

const inputFilePath = path.join(import.meta.dirname, "input.txt")
const outputFilePath = path.join(import.meta.dirname, "output.txt")


const readableStream = createReadStream(inputFilePath, {
    encoding: 'utf-8',
    highWaterMark: 16
})

readableStream.on('data', (chunk)=>{
    console.log('Buffer: ', Buffer.from(chunk))
    console.log('Chunk: ', chunk)
    writableStream.write(chunk)
})

const writableStream = createWriteStream(outputFilePath)

readableStream.pipe(writableStream)