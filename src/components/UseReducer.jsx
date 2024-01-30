import React, { useReducer } from 'react'

const fnReducer = (state, action) => {
  switch(action.type){
    case 'Increment': 
    return{
      count: state.count + 1
    };
    case "Decrement": 
    return {
      count: state.count - 1
    };
    case "Reset" : 
    return {
      count: 0
    };

  
  }
}

const UseReducer = () => {
  const initialState = {count : 0};
  const [state, dispatch] = useReducer(fnReducer, initialState);

  const handleIncrement = () => {
    dispatch({type: "Increment",});
  }
  const handleDecrement = () => {
    dispatch({type: "Decrement",});
  }
  const handleReset = () => {
    dispatch({type: "Reset",});
  }

  return (<>
    <h1>UseReducer</h1>
    <p>Count : {state.count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default UseReducer;