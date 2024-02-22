import React from 'react'
import Loading from '../Loading/index'

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
    const [state, setState] = React.useState({
        error: false,
        loading: false,
        value: '',
        confirmed: false,
        deleted: false,
    })

    //Abstracting states to individual functions

    const onCheck = () => {
        setState({
            ...state,
            loading: true,
            error: false,
        })
    }

    const onConfirm = () => {
        setState({
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        })
    }

    const onError = () => {
        setState({
            ...state,
            error: true,
            loading: false,
            value: '',
        })
    }

    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue,
        })
    }

    const onDelete = () => {
        setState({
            ...state,
            deleted: true,
        })
    }

    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        })
    }

    console.log(state.value)
    React.useEffect(() => {
        console.log('iniciando efecto')
        // Simulating backend call
        if (!!state.loading) {
            console.log('iniciando verificacion')
            setTimeout(() => {
                if (SECURITY_CODE != state.value) {
                    onError()
                } else {
                    onConfirm()
                }
            }, 3000)
            console.log('finalizando verificacion')
        }
        console.log('terminando efecto')
    }, [state.loading])

    console.log(state)
    if (!!state.confirmed && !state.deleted) {
        return (
            <div className="UseState-wrapper">
                <div className="UseState">
                    <p>Estas seguro que deseas eliminar?</p>
                    <button onClick={() => onDelete()}>Si, lo estoy</button>
                    <button onClick={() => onReset()}>No, volver atras</button>
                </div>
            </div>
        )
    } else if (!!state.confirmed && !!state.deleted) {
        console.log('deleting')
        return (
            <>
                <div className="UseState-wrapper">
                    <div className="UseState">
                        <p>Eliminado con exito!</p>
                        <button onClick={() => onReset()}>
                            Volver al estado inicial
                        </button>
                    </div>
                </div>
            </>
        )
    } else {
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
                        onChange={(event) => onWrite(event.target.value)}
                    ></input>
                    <button onClick={() => onCheck()}>Confirmar</button>
                </div>
            </div>
        )
    }
}

export default UseState
