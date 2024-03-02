// import { useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//        <button onClick={()=>{
//         setCount(count+1);
//        }}>
//         Count is {count}
//        </button>
       
//     </>
//   )
// }

// export default App



// import { useEffect, useState } from 'react'

// function App() {
//   console.log("re-render")
//   const [exchangeData, setExchangeData] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(()=>{
//     setTimeout(()=>{
//       setBankData({income:100})
//     },3000)
//   },[])

// useEffect(()=>{
//   setTimeout(() => {
//     setExchangeData({
//       returns: 100
//     });
//   }, 1000);
// },[])
  

//   const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App


// import { useEffect, useMemo, useState } from 'react'

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       },5000);
//     })
//   }, [])
 
//   const cryptoReturns = useMemo(()=>{ // gets avalue while use callback gets a function reference
//     console.log("Hi there before")
//     return exchange1Data.returns+exchange2Data.returns
//   },[])
//   console.log("hi there from adi")
  
//   const incomeTax = (cryptoReturns + bankData.income) * 0.3

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App

// wrap the child inside a "" memo "" if u want to stop its rerendering

//useMemo lets u control rerendering based on a certain state variable change
//it is similar to memoization

//useEffect is used when u want to use sideEffects like the fetch api
//in react , wrPPING IT INSIDE an useEffect get rids of faltu k rerenders

//usecallback lets u memoize a function ie u can wrap a function inside a useCallback and refrence it using a variable

//Use Ref : used to get access to DOM elements, u can manipulate th dom 

import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App