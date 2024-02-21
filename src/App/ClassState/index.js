import React from 'react'

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="ClassState-wrapper">
                <div className="ClassState">
                    <h2>Eliminar ClassState</h2>
                    <p>Por favor, escribe el codigo de seguridad.</p>
                    <input placeholder="Codigo de seguridad"></input>
                    <button>Confirmar</button>
                </div>
            </div>
        )
    }
}

export default ClassState
