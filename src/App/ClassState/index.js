import React from 'react'
import Loading from '../Loading/index'

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loading: false,
        }
    }

    componentDidUpdate() {
        console.log('iniciando efecto')
        // Simulating backend call
        if (!!this.state.loading) {
            console.log('iniciando verificacion')
            setTimeout(() => {
                this.setState({ loading: false })
            }, 3000)
            console.log('finalizando verificacion')
        }
        console.log('terminando efecto')
    }
    render() {
        return (
            <div className="ClassState-wrapper">
                <div className="ClassState">
                    <h2>Eliminar ClassState</h2>
                    <p>Por favor, escribe el codigo de seguridad.</p>
                    {!!this.state.error && (
                        <p>Error: el codigo es incorrecto</p>
                    )}
                    {!!this.state.loading && <Loading />}
                    <input placeholder="Codigo de seguridad"></input>
                    <button
                        onClick={
                            () => this.setState({ loading: true })
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
