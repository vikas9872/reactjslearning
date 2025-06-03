import React from 'react'
import {names} from './List.js'

const ListRendering = () => {
    const nameList=names.map((name, index) => ( <p>{index} {name}</p> ))
    return (
        <div>{nameList}</div>
    )
}

export default ListRendering
