import { Suspense,lazy, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { Dashboard } from "./components/Dasboard";
// import { Landing } from "./components/Landing";
const Dashboard =lazy(()=>import("./components/Dasboard")) //lazy reloads only dashboard will reload ie only get the client side bundle for dashboard
const Landing =lazy(()=>import("./components/Landing"))

function App() {


  return (
    <>
      
      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"Loading..."}> <Dashboard/> </Suspense>}></Route>
        <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}
function Appbar(){
  const navigate= useNavigate();// stops har reload, promotes client side routing and returns the whole html
  return(<div>
        <button onClick={()=>{

          // window.location.href='/'
          navigate('/')
        }}>Landing Page</button>
        <button onClick={()=>{
          // window.location.href='/dashboard'
          navigate('/dashboard')
        }}>Dashboard</button>
      </div>)
}

export default App;
