import React from 'react'
import MyContext from './MyContext';
import Child from './Child';

const Parent = () => {

    const contextValue = "Hello useContext Hook";
  return (
   <>
    <MyContext.Provider value={contextValue}>
        <Child />
    </MyContext.Provider>
   </>
  )
}

export default Parent;