const {mongoose} = require("mongoose");
mongoose.connect("mongodb+srv://Aditya2328:Aditya2328@cluster0.paw7ugs.mongodb.net/todo-app") //bad practice,security vulnarability
const todoSchema= new mongoose.Schema({
    title :String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})
const todo=mongoose.model('todos',todoSchema)

module.exports=({
    todo:todo
})