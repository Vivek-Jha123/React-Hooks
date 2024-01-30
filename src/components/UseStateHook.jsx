import React, { useState } from 'react'

const UseStateHook = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        if(count !== 0){
        setCount(count - 1);
    }
    }
  return (
    <>
    <h1>UseStateHook</h1>
    <p>Count : {count}</p>
    <button style={{marginRight:"10px"}} onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default UseStateHook;