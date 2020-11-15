import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div className="container form-container">
            <h1 className="my-2">
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email <span className="text-danger">*</span> </label>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password <span className="text-danger">*</span> </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} name="password"></input>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Login" style={{padding: '10px 0px', marginTop: '25px'}}/>
            </form>
        </div>
    )
}

export default Login
