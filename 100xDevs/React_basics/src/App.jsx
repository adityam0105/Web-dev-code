import { useState } from "react";
import "./App.css";
// import { todo } from "node:test";

function App() {
  const [todos, setTodos] = useState([{ title: "Practice coding" ,
  description: "Go turn on pc" ,
  completed: "Nope"

},
{
  title: "Devlopment time",
  description: "Watch cohort videos" ,
  completed : "Yupp"

}]);
function addTodo(){
  setTodos([...todos,{
    title: "New Todo ",
    description: "Desc of a new Todo"
  }])

}
return(
  
  <div>
    <button onClick={addTodo}>Add a random todo</button>
    {todos.map(function(todo){
      return <Todo title= {todo.title} description ={todo.description} ></Todo>
    })}
  </div>
)

}
function Todo(props){
  return(<div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.completed}</h3>
  </div>)
}

export default App;
