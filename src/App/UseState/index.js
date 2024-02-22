import React from 'react'
import Loading from '../Loading/index'

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
    const [state, setState] = React.useState({
        error: false,
        loading: false,
        value: '',
    })
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [value, setValue] = React.useState('')

    console.log(state.value)
    React.useEffect(() => {
        console.log('iniciando efecto')
        // Simulating backend call
        if (!!state.loading) {
            console.log('iniciando verificacion')
            setTimeout(() => {
                if (SECURITY_CODE != state.value) {
                    setState({
                        ...state,
                        error: true,
                        loading: false,
                    })
                } else {
                    setState({
                        ...state,
                        error: false,
                        loading: false,
                    })
                }
            }, 3000)
            console.log('finalizando verificacion')
        }
        console.log('terminando efecto')
    }, [state.loading])
    return (
        <div className="UseState-wrapper">
            <div className="UseState">
                <h2>Eliminar UseState</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                {!!state.error && <p>Error: el codigo es incorrecto</p>}
                {!!state.loading && <Loading />}
                <input
                    placeholder="Codigo de seguridad"
                    value={state.value}
                    onChange={() =>
                        setState({
                            ...state,
                            value: event.target.value,
                        })
                    }
                ></input>
                <button
                    onClick={() => {
                        setState({
                            ...state,
                            error: false,
                            loading: true,
                        })
                    }}
                >
                    Confirmar
                </button>
            </div>
        </div>
    )
}

export default UseState
