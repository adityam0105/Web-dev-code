const express =require('express')
const app = express();

function isOldEnough(age){
    if(age>=14){
        return true;
    }
    else{
        return false;
    }
}
function isEnoughMW(req,res,next){
    age=12;
    if(age>=14){
        next();
    }
    else{
    req.json({
        msg: "Sorry you cant get a ride"
    })
    }
}
app.get("/",isEnoughMW,function(req,res){
    res.json({
        msg: "You have succesfully ridden a ride 1"
    });
    req(age)
});

app.listen(3000)