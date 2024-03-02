import { useContext, useState } from "react";
import "./App.css";
import { CountContext } from "./context"; //context API
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <CountContext.Provider value={count}>
          <Count count={count} setCount={setCount}></Count>
        </CountContext.Provider>
      </div>
    </>
  );
}
function Count({ setCount }) {
  return (
    <>
      <CountRenderer />
      <Buttons setCount={setCount} />
      <br />
    </>
  );
}
function CountRenderer() {
  const count = useContext(CountContext);
  return <div>{count}</div>;
}
function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
