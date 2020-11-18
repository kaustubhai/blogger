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
    
    if (!isAuthenticated && !loading && !user) {
        return (
            <nav style={{ display: 'flex', height: '60px'}} className="navbar bg-primary">
            <h2 style={{float: 'left' ,justifyItems:"center"}}>
                <a className="text-light" href="/"><i style={{marginRight: '15px'}} className={icon}></i> {title}</a>
            </h2>
            <ul style={{float: 'right'}}>
                <li style={{marginRight: '15px'}}>
                    <a className="btn btn-primary" href='/login'>Sign In</a>
                </li>
                <li>
                    <a className="btn btn-light" href='/register'>Get Started</a>
                </li>
            </ul>
        </nav>
        )
    }
    else {
        return (
            <div style={{ display: 'flex', height: '60px'}} className="navbar bg-primary">
            <h2 style={{float: 'left' ,justifyItems:"center"}}>
                <a className="text-light" href="/"><i style={{marginRight: '5px'}} className={icon}></i> {title}</a>
            </h2>
            <ul style={{float: 'right'}}>
                <li style={{marginRight: '15px'}}>    
                    <div className="dropdown" style={{float: "right", zIndex: 10}}>
                    <a href="#!" className="btn btn-primary dropbtn">{ (user.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : '') }</a>
                    <div className="dropdown-content" style={{right: 0}}>
                        <a href="/">Bass Blogs</a>
                        <a href="/user/profile">Go to Profile</a>
                        <a href="/user/dashboard">Go to Dashboard</a>
                        <a href="/blog/add-new">Write a new blog</a>
                        <a onClick={onClick} href="/">Sign Out</a>
                    </div>
                    </div>
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
