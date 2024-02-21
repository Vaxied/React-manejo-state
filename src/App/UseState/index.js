import React from 'react'

function UseState({ name }) {
    const [error, setError] = React.useState(false)
    return (
        <div className="UseState-wrapper">
            <div className="UseState">
                <h2>Eliminar UseState</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                {error && <p>Error: el codigo es incorrecto</p>}
                <input placeholder="Codigo de seguridad"></input>
                <button onClick={() => setError(!error)}>Confirmar</button>
            </div>
        </div>
    )
}

export default UseState
