//basic express boilerplate
//use express.json
const express=require("express")
const { createTodo, updateTodo } = require("./types")// object destructured
const { todo } = require("./db")
const app=express()
const cors=require("cors")
app.use(express.json())// can parse json body
app.use(cors({
    origin:"http://localhost:5173"
}))
app.post("/todo", async (req,res)=>{
    const createPayload= req.body
    const parsedPayload=createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            message:"Faulty inputs..."
        })
        return
    }
    //put it in mongodb
    await todo.create({ //if this fails code stops and no res.json()
        title :createPayload.title,
        description:createPayload.description,
        completed: false
    })
    res.json({
        message:"Todo has been created..."
    })
})
app.get("/todos",async (req,res)=>{
    const todos= await todo.find({}) // a db hit call returns a promise
    res.json({
        todos
    })
})

app.put("/completed",async (req,res)=>{
    const updatedPayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            message:"Faulty inputs..."
        })
        return
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        message:"Todo has been completed..."
    })
})
app.listen(3000)