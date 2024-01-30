import React, { useState } from 'react'

const useCustomHook = () => {

    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
  return {count, setCount, increment, decrement}
}

export default useCustomHook