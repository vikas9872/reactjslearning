import React, { useEffect, useState } from 'react'

const AfterEveryRender = () => {
    const [count, setCount]=useState(0);
    useEffect(()=>{
        document.title=(`You have clicked button ${count} times`)
    })
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default AfterEveryRender
