import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
} from '../types'

const AuthReducer = (state, action) => {
    switch (action.type) {
        case USER_LOADED:
            return ({
                ...state,
                user: action.payload,
                loading: false,
                isAuthenticated: true
            })
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload)
            return ({
                ...state,
                user: action.payload,
                loading: false,
                isAuthenticated: true
            })
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload)
            return ({
                ...state,
                user: action.payload,
                loading: false,
                isAuthenticated: true
            })
        case LOGOUT:
            localStorage.removeItem('token')
            return ({
                ...state,
                user: null,
                loading: false,
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
        default:
            return state;
    }
}

export default AuthReducer
