import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext'

const Navbar = ({ icon, title }) => {
    
    const authContext = useContext(AuthContext)

    const { loadUser, user, isAuthenticated } = authContext

    useEffect(() => { 
        loadUser()
        // eslint-disable-next-line
     }, [])
    
    if (!isAuthenticated) {
        return (
            <div style={{ display: 'flex', height: '60px', paddingLeft: '50px', paddingRight: '50px'}} className="navbar bg-primary">
            <h2 style={{float: 'left' ,justifyItems:"center"}}>
                <a className="text-light" href="/"><i style={{marginRight: '15px'}} className={icon}></i> {title}</a>
            </h2>
            <ul style={{float: 'right'}}>
                <li style={{marginRight: '15px'}}>
                    <a className="btn btn-primary" href='/login'>Login</a>
                </li>
                <li>
                    <a className="btn btn-light" href='/register'>Register</a>
                </li>
            </ul>
        </div>
        )
    }
    else {
        return (
            <div style={{ display: 'flex', height: '60px', paddingLeft: '50px', paddingRight: '50px'}} className="navbar bg-primary">
            <h2 style={{float: 'left' ,justifyItems:"center"}}>
                <a className="text-light" href="/"><i style={{marginRight: '15px'}} className={icon}></i> {title}</a>
            </h2>
            <ul style={{float: 'right'}}>
                <li style={{marginRight: '15px'}}>
                        <a className="btn btn-primary" href='#!'>{ user.name }</a>
                </li>
                <li>
                    <a className="btn btn-light" href='/'>Logout</a>
                </li>
            </ul>
        </div>
        )    
    }
}

Navbar.defaultProps = {
    icon: '	fas fa-rainbow',
    title: 'Bass Blogs'
}

export default Navbar
