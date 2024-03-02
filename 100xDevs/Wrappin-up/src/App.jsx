function App(){
  return<div>
  <RealWrapper>
    <div>
      Hello Brother
    </div>
  </RealWrapper>
  </div>
  
}

// function TextComponent(){
//   return <div>
//     hi there
//   </div>
// }
// function CardWrapper({innerComponent}){
//   return <div style={{border:"2px solid black"}}>
//     {innerComponent}
//   </div>
  
// }
function RealWrapper({children}){
  return <div style={{border:"2px solid black", padding: 20}}>
    {children}
  </div>
}



export default App