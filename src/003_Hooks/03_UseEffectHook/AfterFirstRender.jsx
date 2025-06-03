import React, { useEffect, useState } from 'react'

const AfterFirstRender = () => {
    const [count, setCount]=useState(0);
    useEffect(()=>{
        document.title=(`You have cliked the button ${count} times`)
    },[])
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>Click 1</button>
        </div>
    )
}

export default AfterFirstRender
