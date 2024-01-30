import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    
    const [name, setName] = useState('');
    const inputRef = useRef();

    const handleSubmit = (e) => {
   e.preventDefault();
   setName(inputRef.current.value);
   inputRef.current.value = "";
    }
  return (
    <>
    <div>UseRefHook</div>
 
   
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your name' ref={inputRef} />
        <button>Submit</button>
      </form>
      <p>{name}</p>
    
    </>
  )
}

export default UseRefHook