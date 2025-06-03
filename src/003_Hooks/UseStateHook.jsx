import React, { useState } from 'react'

const UseStateHook = () => {
    const [val,setVal]=useState(0);

    const handleIncrement = () =>{
        setVal(val+1);
    }
    const handleDecrement = () =>{
        setVal(val-1);
    }
    return (
        <>
            <button onClick={handleIncrement}>Increment</button>
            <div>{val}</div>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default UseStateHook
