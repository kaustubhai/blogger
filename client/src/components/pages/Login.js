import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext'

const Login = props => {

    const authContext = useContext(AuthContext)
    const { loginUser, isAuthenticated } = authContext

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        setEmail('')
        setPassword('')
        if (isAuthenticated)
            props.history.push('/')
            // eslint-disable-next-line
    }, [isAuthenticated])

    const onSubmit = (e) => {
        e.preventDefault()
        const userToBe = { email, password }
        loginUser(userToBe)
    }

    return (
        <div className="container form-container">
            <h1 className="my-2">
                Account <span className="text-primary">Login</span>
            </h1>
            <p className="right">Don't have an Account? <a href="/register">Register</a></p>
            <form autoComplete="off" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email <span className="text-danger">*</span> </label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span className="text-danger">*</span> </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password"></input>
                </div>
                <button type="submit" className="btn py-2 right my-2 black text-white btn-block" style={{width: '25%'}}>Login</button>
            </form>

        </div>
    )
}

export default Login
