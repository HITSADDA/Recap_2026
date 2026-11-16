export default function catchasync(fn){
    return ( req, resp, next) =>{
        Promise.resolve(fn(req, resp, next)).catch(next)
    }
}