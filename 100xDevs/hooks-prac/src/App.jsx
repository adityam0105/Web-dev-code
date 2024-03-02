import { useEffect, useState } from "react";
import axios from "axios";
import { useIsOnline } from "./hooks/useIsOnline";
// function useTodos(n){
//   const [todos, setTodos] = useState([])
//   const [loading,setLoading]=useState(true);
//   useEffect(() => {
//     const value=setInterval(()=>{
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos)
//         setLoading(false)
//       })
//     },n*1000)

//     axios.get("https://sum-server.100xdevs.com/todos")
//     .then(res=>{
//       setTodos(res.data.todos);
//       setLoading(false)
//     })
//     return ()=>{
//       clearInterval(value);
//     }
//   }, [n])
//   return {todos,loading};
// }
// function App() {

//   const {todos,loading}=useTodos(10);
//   return (
//     <>
//       {loading?"Loading...":todos.map(todo => <Track todo={todo} />)}
//     </>
//   )
// }

// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>


//Online status custom hook
  
function App() {
const isOnline=useIsOnline(true)
return (<>
    {isOnline? "You are online yay!":"You are not online"}
  </>);
}

export default App;
