// import { title } from 'process'
import { useState } from 'react'
let counter=4;

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title : "Go to gym",
    description : "Today itself"
  },
  {
    id:2,
    title : "Study Devlopment",
    description : "Harkirat Lecture"

  },
  {
    id:3,
    title : "Study DSA",
    description : "Love Babbar"
  }])
  function addTodo(){
    setTodos([...todos,{
      id :counter++,
      title: Math.random(),
      description: Math.random()
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Todo id={todo.id} title={todo.title} description={todo.description} />)} 
    </div>
  )
  
}
function Todo({title,description}){
    return <div>
      <h3>
        {title}
      </h3>
      <h5>
        {description}
      </h5>
    </div>
}

export default App
