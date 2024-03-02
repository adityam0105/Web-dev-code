// Middleware for handling auth
const jwt =require("jsonwebtoken")
const {JWT_SECRET}= require("../config")
const {Admin}=require("../db")
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const tokens=req.headers.authorization; // Brearer ajdhadhadkjhakjda
    const words=tokens.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,JWT_SECRET);
    try{
        if(decodedValue.username){
            req.username=decodedValue.username;
            next();
        }else{
            res.status(403).json({
                msg:"OOPS!! You are not authenticated..."
            })
        }
    }catch(e){
        res.json({
            message:"Incorrect Inputs..."
        })
    }
    

}

module.exports = adminMiddleware;