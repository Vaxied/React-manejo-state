import React from 'react'
import Loading from '../Loading/index'

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [value, setValue] = React.useState('')

    console.log(value)
    React.useEffect(() => {
        console.log('iniciando efecto')
        // Simulating backend call
        if (!!loading) {
            console.log('iniciando verificacion')
            setTimeout(() => {
                setLoading(false)
                if (SECURITY_CODE != value) {
                    setError(true)
                }
            }, 3000)
            console.log('finalizando verificacion')
        }
        console.log('terminando efecto')
    }, [loading])
    return (
        <div className="UseState-wrapper">
            <div className="UseState">
                <h2>Eliminar UseState</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                {!!error && <p>Error: el codigo es incorrecto</p>}
                {!!loading && <Loading />}
                <input
                    placeholder="Codigo de seguridad"
                    value={value}
                    onChange={() => setValue(event.target.value)}
                ></input>
                <button
                    onClick={() => {
                        setLoading(true)
                        if (error) setError(false)
                        // or setError(prevState => !prevState)
                    }}
                >
                    Confirmar
                </button>
            </div>
        </div>
    )
}

export default UseState
