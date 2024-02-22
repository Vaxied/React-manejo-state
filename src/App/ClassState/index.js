import React from 'react'
import Loading from '../Loading/index'

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loading: false,
            value: '',
        }
    }

    componentDidUpdate() {
        console.log(this.state.value)
        // Simulating backend call
        if (!!this.state.loading) {
            console.log('iniciando verificacion')

            setTimeout(() => {
                if (SECURITY_CODE != this.state.value) {
                    this.setState({ error: true, loading: false })
                } else this.setState({ error: false, loading: false })
            }, 3000)
            console.log('finalizando verificacion')
        }
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
                    <input
                        placeholder="Codigo de seguridad"
                        value={this.state.value}
                        onChange={() =>
                            this.setState({ value: event.target.value })
                        }
                    />
                    <button
                        onClick={
                            () => this.setState({ loading: true, error: false })
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
