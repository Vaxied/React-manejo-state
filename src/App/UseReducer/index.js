import React from 'react'
import { useReducer } from 'react'
import Loading from '../Loading/index'

function UseReducer({ name }) {
    const initialState = {
        error: false,
        loading: false,
        value: '',
        confirmed: false,
        deleted: false,
    }

    const onError = () => dispatch({ type: actionTypes.error })
    const onCheck = () => dispatch({ type: actionTypes.check })
    const onConfirm = () => dispatch({ type: actionTypes.confirmed })
    const onDelete = () => dispatch({ type: actionTypes.deleted })
    const onReset = () => dispatch({ type: actionTypes.reset })

    const onWrite = (event) => {
        dispatch({ type: actionTypes.write, payload: event.target.value })
    }
    // A reducer receives two parameters. A state, and an action.
    // This action can be discrete or dynamic.

    // Examples below (there are some states lacking)

    // const reducerIf = (state, action) => {
    //     if (action.type === 'ERROR') {
    //         return {
    //             ...state,
    //             error: true,
    //             loading: false,
    //         }
    //     } else if (action.type === 'VALIDATE') {
    //         return {
    //             ...state,
    //             loading: true,
    //         }
    //     } else if (action.type === 'CONFIRMED') {
    //         return {
    //             ...state,
    //             cofirmed: true,
    //         }
    //     } else {
    //         return { ...state }
    //     }
    // }

    // const reducerSwitch = (state, action) => {
    //     switch (action.type) {
    //         case 'ERROR':
    //             return {
    //                 ...state,
    //                 error: true,
    //                 loading: false,
    //             }
    //         case 'VALIDATE':
    //             return {
    //                 ...state,
    //                 loading: true,
    //             }
    //         case 'CONFIRMED':
    //             return {
    //                 ...state,
    //                 cofirmed: true,
    //             }
    //         default:
    //             return { ...state }
    //     }
    // }

    const actionTypes = {
        error: 'ERROR',
        confirmed: 'CONFIRMED',
        check: 'CHECK',
        deleted: 'DELETED',
        reset: 'RESET',
        write: 'WRITE',
    }
    const reducerObject = (state, payload) => ({
        [actionTypes.error]: {
            ...state,
            error: true,
            loading: false,
            value: '',
        },
        [actionTypes.confirmed]: {
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        },
        [actionTypes.check]: {
            ...state,
            loading: true,
            error: false,
        },
        [actionTypes.deleted]: {
            ...state,
            deleted: true,
        },
        [actionTypes.reset]: {
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        },
        [actionTypes.write]: {
            ...state,
            value: payload,
        },
    })

    const reducer = (state, action) => {
        if (reducerObject(state)[action.type]) {
            return reducerObject(state, action.payload)[action.type]
        } else return state
        // More Optimized
        // return reducerObject(state, action.payload)[action.type] || state
    }
    const SECURITY_CODE = 'paradigma'

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)
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

    if (!!state.confirmed && !state.deleted) {
        return (
            <div className="UseReducer-wrapper">
                <div className="UseReducer">
                    <p>Estas seguro que deseas eliminar?</p>
                    <button onClick={onDelete}>Si, lo estoy</button>
                    <button onClick={onReset}>No, volver atras</button>
                </div>
            </div>
        )
    } else if (!!state.confirmed && !!state.deleted) {
        console.log('deleting')
        return (
            <>
                <div className="UseReducer-wrapper">
                    <div className="UseReducer">
                        <p>Eliminado con exito!</p>
                        <button onClick={onReset}>
                            Volver al estado inicial
                        </button>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <div className="UseReducer-wrapper">
                <div className="UseReducer">
                    <h2>Eliminar UseReducer</h2>
                    <p>Por favor, escribe el codigo de seguridad.</p>
                    {!!state.error && <p>Error: el codigo es incorrecto</p>}
                    {!!state.loading && <Loading />}
                    <input
                        placeholder="Codigo de seguridad"
                        value={state.value}
                        onChange={onWrite}
                        disabled={state.loading}
                    ></input>
                    <button onClick={onCheck}>Confirmar</button>
                </div>
            </div>
        )
    }
}

export default UseReducer
