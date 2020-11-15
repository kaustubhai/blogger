import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(email, username, password)
    }

    return (
        <div className="container form-container">
            <h1 className="my-2">
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email <span className="text-danger">*</span> </label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username <span className="text-danger">*</span> </label>
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={username}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span className="text-danger">*</span> </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password"></input>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Register" style={{padding: '10px 0px', marginTop: '25px'}}/>
            </form>
        </div>
    )
}

export default Login
