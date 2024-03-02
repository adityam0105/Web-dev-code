import React , {Fragment} from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  
 
  return(
    <div>
      <HeaderwithButtons ></HeaderwithButtons>
      <Header title="adityakadost"></Header>
      <Header title="adityaKiFamily"></Header>
    </div>
  )
}

const Header =React.memo(function Header({title}){
  return <div>
    {title}
  </div>
})
// function HeaderOther({title}){
//   // console.log("rerender...")
//   return <div>
//     {title}
//   </div>
// }
function HeaderwithButtons(){
  const[title,setTitle] =useState("My name is Aditya");
  function updateTitle(){
    setTitle("My name is " +Math.random());
  }
  return(
    <div>
      <button onClick= {updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </div>
  )
}
export default App
