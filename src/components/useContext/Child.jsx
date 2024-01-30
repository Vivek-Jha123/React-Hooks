import React, { useContext } from 'react'
import MyContext from './MyContext';

const Child = () => {
  const contextValue =  useContext(MyContext);
  return (
   <>
    <MyContext.Consumer>
     {(contextValue) => <p>{contextValue}</p>}
    </MyContext.Consumer>
   </>
  )
}

export default Child;