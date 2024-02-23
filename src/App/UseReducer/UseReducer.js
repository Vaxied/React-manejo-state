import React from 'React'

function UseState() {
    const initialSatate = {
        error: false,
        loading: false,
        value: '',
        confirmed: false,
        deleted: false,
    }

    // A reducer receives two parameters. A state, and an action.
    // This action can be discrete or dynamic.

    // Examples below (there are some states lacking)

    const reducerIf = (state, action) => {
        if (action.type === 'ERROR') {
            return {
                ...state,
                error: true,
                loading: false,
            }
        } else if (action.type === 'VALIDATE') {
            return {
                ...state,
                loading: true,
            }
        } else if (action.type === 'CONFIRMED') {
            return {
                ...state,
                cofirmed: true,
            }
        } else {
            return { ...state }
        }
    }

    const reducerSwitch = (state, action) => {
        switch (action.type) {
            case 'ERROR':
                return {
                    ...state,
                    error: true,
                    loading: false,
                }
            case 'VALIDATE':
                return {
                    ...state,
                    loading: true,
                }
            case 'CONFIRMED':
                return {
                    ...state,
                    cofirmed: true,
                }
            default:
                return { ...state }
        }
    }

    const reducerObject = (state) => ({
        ERROR: {
            ...state,
            error: false,
            loading: false,
        },
        VALIDATE: {
            ...state,
            loading: true,
        },
        CONFIRMED: {
            ...state,
            confirmed: true,
        },
    })

    const reducer = (state, action) => {
        if (reducerObject(state)[action.type]) {
            return reducerObject(state)[action.type]
        } else return state
        // More Optimized
        // return reducerObject(state)[action.type] || state
    }
}
