import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    REMOVE_ALERT,
} from '../types'

const AuthReducer = (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return ({
                ...state,
                user: action.payload,
                loading: false,
                errors: null,
                isAuthenticated: true
            })
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload)
            return ({
                ...state,
                user: action.payload,
                loading: false,
                errors: null,
                isAuthenticated: true
            })
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload)
            return ({
                ...state,
                user: action.payload,
                loading: false,
                errors: null,
                isAuthenticated: true
            })
        case LOGOUT:
            localStorage.removeItem('token')
            return ({
                ...state,
                user: null,
                loading: false,
                errors: action.payload,
                isAuthenticated: false
            })
        case AUTH_ERROR:
            return ({
                ...state,
                errors: action.payload,
                user: null,
                loading: false,
                isAuthenticated: false
            })
        case REMOVE_ALERT:
            return ({
                ...state,
                errors: null,
            })
        default:
            return state;
    }
}

export default AuthReducer
