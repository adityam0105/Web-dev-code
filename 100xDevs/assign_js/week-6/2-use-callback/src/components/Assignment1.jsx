import { useCallback } from "react";
import { useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handy= useCallback( ()=> {
        // setCount(count+1);
        setCount((currentCount)=>{
            return currentCount+1;
        })
    },[])

    const bandy=useCallback(()=> {
        // setCount(count-1);  
        setCount((currentCount)=>{
            return currentCount+1;
        })
    },[])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handy} onDecrement={bandy} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
