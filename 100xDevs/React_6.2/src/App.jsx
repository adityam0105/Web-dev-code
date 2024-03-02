import { useState } from "react";
import { useEffect } from "react";

function App() {
  return (<div>
    <button onClick={TodoH} >1</button>
    <button onClick={TodoH} >2</button>
    <button onClick={TodoH} >3</button>
    <button onClick={TodoH} >4</button>
  </div>
)}
function TodoH(){
  return <Todo id={1}/>
}
function Todo({id}) {
  const [todo, setTodo] = useState({id});

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(async function(res) {
        const json = await res.json();
        setTodo (json.todo);
      })
  }, [id])

  return <div>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}

export default App;