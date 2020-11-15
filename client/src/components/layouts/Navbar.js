import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext'

const Navbar = (props) => {

    const { icon, title } = props
    
    const authContext = useContext(AuthContext)

    const { logoutUser, loadUser, user, isAuthenticated, loading } = authContext

    useEffect(() => { 
        loadUser()
        // eslint-disable-next-line
    }, [])
    
    const onClick = (e) => {
        e.preventDefault()
        logoutUser()
    }
    
    if (!isAuthenticated && !loading) {
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
            <div style={{ display: 'flex', height: '60px', paddingLeft: '50px', paddingRight: '30px'}} className="navbar bg-primary">
            <h2 style={{float: 'left' ,justifyItems:"center"}}>
                <a className="text-light" href="/"><i style={{marginRight: '5px'}} className={icon}></i> {title}</a>
            </h2>
            <ul style={{float: 'right'}}>
                <li style={{marginRight: '15px'}}>
                        <a className="btn btn-primary" href='#!'>{ user.name }</a>
                </li>
                <li>
                    <a href='/' onClick={onClick} className="btn btn-light">Logout</a>
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
