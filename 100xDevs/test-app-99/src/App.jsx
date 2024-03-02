import { useCallback, useEffect, useMemo, useState,memo } from 'react'
// import axios from "axios"
// function App() {
//   const[selectedId,setSelectedId]=useState(1);
//   return(
//     <div>
//       <button onClick={
//         ()=>{
//           selectedId(1)
//         }
//       }>1</button>
//       <button onClick={()=>{
//         setSelectedId(2)
//       }}>2</button>
//       <button onClick={()=>{
//         setSelectedId(3)
//       }}>3</button>
//       <button onClick={()=>{
//         setSelectedId(4)
//       }}>4</button>
//       <Todo id={selectedId}></Todo>
//     </div>
//   )
// }
// function Todo({id}){
//   const[todo,setTodo]=useState({});
//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todo?id="+id)
//     .then((response)=>{
//       setTodo(response.data.todo)
//     },[id])
//   })
//   return <div>
//   <h1>
//     {todo.title}
//   </h1>
//   <h3>
//     {todo.description}
//   </h3>
//   </div>
// }



// function App(){
//   const [counter,setCounter]=useState(0);
//   const [inputValue,setInputValue]=useState(1);
//   // const[count,setCount]=useState(0);
//   let count= useMemo(()=>{ //better than useEffect but used in less codebases
//     let count=0;
//     for(let i=1;i<=inputValue;i++){
//       count+=i;
//     }
//     return count
//   },[inputValue] ) //only excecuted based on the inputValue change



//   // useEffect(()=>{
//   //   let finalCount=0;
//   //   for(let i=1;i<=inputValue;i++){
//   //     finalCount+=i;
//   //   }
//   //   setCount(finalCount);
//   // },[inputValue])
//   return(<div>
//     <input onChange={(e)=>{
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum 1 to n"}/>
//     <br />
//     Sum 1 to {inputValue} is {count}
//     <br />
//     <button onClick={()=>{
//       setCounter(counter+1);
//     }}>Counter ({counter})</button>
//   </div>)
// }

function App() {
  const [count, setCount] = useState(0)

  const onClick= useCallback(()=>{
    console.log("child clicked")
  },[])

  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({onClick}) => { // memo stops parent to child rerendering
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})
export default App
