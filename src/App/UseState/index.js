import React from 'react'

function UseState({ name }) {
    return (
        <div className="UseState-wrapper">
            <div className="UseState">
                <h2>Eliminar UseState</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                <input placeholder="Codigo de seguridad"></input>
                <button>Confirmar</button>
            </div>
        </div>
    )
}

export default UseState
