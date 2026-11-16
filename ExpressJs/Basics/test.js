import http from 'http'


const server = http.createServer((req, resp)=>{
    return resp.end("hii")
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000")
})