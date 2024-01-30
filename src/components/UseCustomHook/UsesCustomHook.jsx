import React from 'react'
import useCustomHook from './UseCustomHook';

const UsesCustomHook = () => {

   const {count, increment, decrement} = useCustomHook();
  return (
    <>
    <div>UseCustomHook</div>
    <p>Count : {count} </p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    </>

  )
}

export default UsesCustomHook