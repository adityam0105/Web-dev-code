import { useEffect, useState } from 'react'
import axios from'axios'

function useTodos(){ //custom hooks are made by wrapping provided hooks by your own hook
  const[todos,setTodos]=useState([])
  useEffect(()=>{
    axios.get("")
    .then((res)=>{
      setTodos(res.data.todos);
    })
  },[])
  return todos;
}
function App() {
  const todos=useTodos();
  return (
    <>
      <div>
        {todos}
      </div>
    </>
  )
}

export default App
