import React, { useState } from 'react'

const UseStateHookWithPrev = () => {
    const [count, setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(prev=>prev+5)
    }
    const handleDecrement=(prev)=>{
        setCount(prev=>prev-5)
    }
    return (
        <div>
            <div>
                <button onClick={handleIncrement}>Increment</button>
            </div>
            {count}
            <div>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    )
}

export default UseStateHookWithPrev
