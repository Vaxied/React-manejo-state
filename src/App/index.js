import React from 'react'
import '../App.css'
import UseState from './UseState/index.js'
// import ClassState from './ClassState/index.js'
import UseReducer from './UseReducer/index.js'

function App() {
    return (
        <>
            <UseState name={'UseState'} />
            <hr />
            <UseReducer name={'UseReducer'} />
        </>
    )
}

export default App
