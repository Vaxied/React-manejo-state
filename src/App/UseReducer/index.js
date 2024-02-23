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

    const reducerObject = (state, payload) => ({
        ERROR: {
            ...state,
            error: true,
            loading: false,
            value: '',
        },
        CONFIRMED: {
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        },
        CHECK: {
            ...state,
            loading: true,
            error: false,
        },
        DELETED: {
            ...state,
            deleted: true,
        },
        RESET: {
            ...state,
            confirmed: false,
            deleted: false,
            value: '',
        },
        WRITE: {
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
                    dispatch({ type: 'ERROR' })
                } else {
                    dispatch({ type: 'CONFIRMED' })
                }
            }, 3000)
            console.log('finalizando verificacion')
        }
        console.log('terminando efecto')
    }, [state.loading])

    if (!!state.confirmed && !state.deleted) {
        return (
            <div className="UseState-wrapper">
                <div className="UseState">
                    <p>Estas seguro que deseas eliminar?</p>
                    <button onClick={() => dispatch({ type: 'DELETED' })}>
                        Si, lo estoy
                    </button>
                    <button onClick={() => dispatch({ type: 'RESET' })}>
                        No, volver atras
                    </button>
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
                        <button onClick={() => dispatch({ type: 'RESET' })}>
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
                        onChange={(event) =>
                            dispatch({
                                type: 'WRITE',
                                payload: event.target.value,
                            })
                        }
                    ></input>
                    <button onClick={() => dispatch({ type: 'CHECK' })}>
                        Confirmar
                    </button>
                </div>
            </div>
        )
    }
}

export default UseReducer
