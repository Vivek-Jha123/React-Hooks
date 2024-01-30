import React from 'react'

const Child = ({handleIncrement}) => {
 
  

  return (
    <button onClick={handleIncrement}>
        Increment
    </button>
  )
}

export default Child;