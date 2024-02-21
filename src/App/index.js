import React from 'react'
import '../App.css'
import UseState from './UseState/index.js'
import ClassState from './ClassState/index.js'

function App() {
    return (
        <>
            <UseState name={'UseState'} />
            <hr />
            <ClassState name={'ClassState'} />
        </>
    )
}

export default App
