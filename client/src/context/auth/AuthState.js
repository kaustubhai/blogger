import React, { useReducer } from 'react'
import axios from 'axios'
import AuthReducer from './AuthReducer'
import AuthContext from './AuthContext'
import setAuthToken from '../utils/setAuthToken'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../types'

const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: false,
        user: null,
        errors: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    const loadUser = async () => {
        try {
            if (localStorage.getItem('token')){
                setAuthToken(localStorage.getItem('token'))
                const user = await axios.get('/api/user')
                dispatch({ type: USER_LOADED, payload: user.data })
            }
        } catch (error) {
            dispatch({ type: AUTH_ERROR, payload: error.response.data.msg })
            console.log(error)
        }
    }

    const registerUser = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const user = await axios.post('/api/user/register', formData, config)
            dispatch({ type: REGISTER_SUCCESS, payload: user.data.token })
            loadUser()
        } catch (error) {
            dispatch({ type: AUTH_ERROR, payload: error.response.data.msg })
            console.log(error.response.data.msg)
        }
    }

    const loginUser = async (formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const user = await axios.post('/api/user/login', formData, config)
            dispatch({ type: LOGIN_SUCCESS, payload: user.data.token })
            loadUser()
        } catch (error) {
            dispatch({ type: AUTH_ERROR, payload: error.response.data.msg })
            console.log(error.response.data)
        }
    }

    const logoutUser = () => {
        dispatch({ type: LOGOUT })
    }

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isAuthenticated: state.isAuthenticated,
            errors: state.errors,
            loading: state.loading,
            registerUser,
            loginUser,
            loadUser,
            logoutUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
