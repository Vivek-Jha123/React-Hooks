import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
const [count, setCount] = useState(0);
    useEffect(() =>{
    const timer = setInterval(() => {
        setCount(count => count + 1)
    },1000);

    return () => {
        clearInterval(timer);
    }
    },[])
  return (
  <>
    <h1>UseEffectHook</h1>
    <p>Time {count} seconds </p>
</>
  )
}

export default UseEffectHook;
