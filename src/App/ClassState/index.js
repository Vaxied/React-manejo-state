import React from 'react'

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
        }
    }
    render() {
        return (
            <div className="ClassState-wrapper">
                <div className="ClassState">
                    <h2>Eliminar ClassState</h2>
                    <p>Por favor, escribe el codigo de seguridad.</p>
                    {this.state.error && <p>Error: el codigo es incorrecto</p>}
                    <input placeholder="Codigo de seguridad"></input>
                    <button
                        onClick={
                            () => this.setState({ error: !this.state.error })
                            // or using prevState and implicit return
                            // this.setState(prevState => ({error: !prevState.error}))
                        }
                    >
                        Confirmar
                    </button>
                </div>
            </div>
        )
    }
}

export default ClassState
