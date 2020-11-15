import React, { useState, useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'

const Login = () => {

    const authContext = useContext(AuthContext)

    const { registerUser } = authContext

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2)
            return console.log("Passwords dont match")
        else if (password.length <= 7)
            return console.log("Password should be of more than 8 characters")
        else {
            const userToBe = { name, email, username, password }
            registerUser(userToBe)
            console.log("Registration successful")
        }
    }

    return (
        <div className="container form-container">
            <h1 className="my-2">
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
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
                <input type="submit" className="btn btn-primary btn-block" value="Register" style={{padding: '10px 0px', marginTop: '25px'}}/>
            </form>
        </div>
    )
}

export default Login
