import React, { useState } from 'react'

const TernaryRendering = () => {
    const [islogIn, setIsLogin]=useState(true);
    return (
        <div>
            Ternary Rendering:
            {islogIn ? <div>Welcome Vikas</div> : <div>Welcome Guest</div> }
        </div>
    )
}

export default TernaryRendering
