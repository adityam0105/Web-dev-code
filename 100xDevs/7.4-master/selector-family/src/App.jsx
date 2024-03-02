
import './App.css'
import { RecoilRoot, useRecoilState,useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({id}) {
  //suspense ,errorBoundary api
  //  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  const[todo,setTodo]= useRecoilStateLoadable(todosAtomFamily(id));
  if(todo.state==="loading"){ //u can use skeletons here
    return<div>
      Loading...
    </div>
  }
  else if(todo.state==="hasValue"){
    return (
      <div>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </div>
    )
  }
  else if(todo.state==="hasError"){
    return(<div>
      Error while getting data from the backend
    </div>)
  }
}

export default App
