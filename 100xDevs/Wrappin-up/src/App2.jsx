import { useState } from "react";
import { useEffect } from "react";

function App2(){
    const [todos,setTodos]= useState([]);
    useEffect(()=>{fetch("https://sum-server.100xDevs.com/todos").
then(async function(res){
    const json= await res.json();
    setTodos(json.todos);
})},[])
function Todo({title,description}){
    return <div>
        <h2>{title}</h2>
        <h4>{description}</h4>
    </div>
}
return <div>
    {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.d}></Todo>)}
</div>
}

export default App2