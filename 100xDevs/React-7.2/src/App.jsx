import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
//context api cleans up the syntax a bit and
//doesn't optimize re-rendering( a state management library has this feature)
//recoil api works best with the global state variable
// use state works good with the local state variables and inside the function stuff
function App() {

  return (
    <>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </>
  );
} 
function Count() {
  return (
    <>
      <CountRenderer />
      <EvenCountRenderer/>
      <Buttons />
    </>
  )
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <>
      <b>{count}</b>
      <br />
    </>
  );
}
function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return(<>

  {isEven ? "It's Even": null}
  <br />
  </>)
}
function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount= useSetRecoilState(countAtom)
  return (
    <>
      <button
        onClick={() => {
          setCount(count=>count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count=>count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}
export default App;
