const jwt =require("jsonwebtoken")
const {JWT_SECRET}= require("../config")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const tokens=req.headers.authorization; // Brearer ajdhadhadkjhakjda
    const words=tokens.split(" ");
    const jwtToken=words[1];// i got the ajdhakdjkjd
    const decodedValue=jwt.verify(jwtToken,JWT_SECRET); // verifying it vs secret
    if(decodedValue.username){
        req.username=decodedValue.username;

        next();
    }else{
        res.status(403).json({
            msg:"OOPS!! You are not authenticated..."
        })
    }
}

module.exports = userMiddleware;