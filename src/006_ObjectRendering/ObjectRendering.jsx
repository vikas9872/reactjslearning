import React from 'react'
import { names } from './Objects.js'
const ObjectRendering = () => {
    const personDetails=names.map((person)=>(
        <>
            <div key={person.id}>
                <p>NAME: {person.name}. </p>
                <p>AGE: {person.age}.</p> 
                <p>COURSE: {person.course}</p>
            </div>
        </>
    ))
    return (
        <div>
            { personDetails }
        </div>
    )
}

export default ObjectRendering
