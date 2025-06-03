import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const nameRef = useRef(null);
    useEffect(() => {
        nameRef.current.focus();
    }, [])
    return (
        <div>
            <label>First Name: </label>
            <input type="text" ref={nameRef} />
        </div>
    )
}

export default UseRef
