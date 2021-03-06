import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext'

const Login = props => {

    const authContext = useContext(AuthContext)

    const { registerUser, isAuthenticated, setAlert } = authContext

    useEffect(() => {
        if (isAuthenticated)
            props.history.push('/')
        // eslint-disable-next-line
    }, [isAuthenticated])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2)
            return setAlert("Passwords dont match")
        else if (password.length <= 7)
            return setAlert("Password should be of more than 8 characters")
        else {
            const userToBe = { name, email, username, password }
            registerUser(userToBe)
            console.log("Registration successful")
        }
    }

    return (
        <div className="container  form-container">
            <h1 className="my-1">
                Account <span className="text-primary">Register</span>
            </h1>
            <p className="right">Already have an Account? <a href="/login">Login</a></p>
            <form autoComplete="off" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name <span className="text-danger">*</span> </label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name} required ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email <span className="text-danger">*</span> </label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username <span className="text-danger">*</span> </label>
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username} required ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span className="text-danger">*</span> </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password" required ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password <span className="text-danger">*</span> </label>
                    <input type="password" onChange={(e) => setPassword2(e.target.value)} value={password2} name="password"></input>
                </div>
                <button type="submit" className="btn py-2 right my-2 black text-white btn-block" style={{width: '25%'}}>Register</button>
                
            </form>
        </div>
    )
}

export default Login
