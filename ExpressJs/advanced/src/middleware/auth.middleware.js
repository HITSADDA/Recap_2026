import { VerifyAccessToken } from "../utils/tokens.utils.js"

export default async function auth(req, resp, next){
    try {
        const access_token = req.cookies.accessToken;
        
        if(!access_token){
            throw new Error("Unautharized Access")
        }
        
        const user = await VerifyAccessToken(access_token)
        
        if(!user){
            return new Error("Unautharized Access")
        }

        req.user = user;
        next()

    } catch (error) {
        throw new Error("Unautharized Access")
    }
}