import React from 'react'

function UseState({ name }) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        console.log('iniciando efecto')
        if (!!loading) {
            console.log('iniciando verificacion')
            setTimeout(() => {
                setLoading(false)
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
                {error && <p>Error: el codigo es incorrecto</p>}
                {loading && <p>Cargando...</p>}
                <input placeholder="Codigo de seguridad"></input>
                <button
                    onClick={() => setLoading(true)}
                    // or setError(prevState => !prevState)
                >
                    Confirmar
                </button>
            </div>
        </div>
    )
}

export default UseState
