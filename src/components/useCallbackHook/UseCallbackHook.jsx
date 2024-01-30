import React, { useCallback, useState } from 'react';
import Child from './Child';

const UseCallbackHook = () => {
    const [count, setCount] = useState(0)
    

    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    },[count])
  return (
    <>
    <h1>UseCallbackHook</h1>
    <p>Count : {count}</p>
 

    <Child handleIncrement={handleIncrement}/>
    </>
  )
}

export default UseCallbackHook;