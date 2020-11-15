import React from 'react'

const Navbar = ({icon, title}) => {
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

Navbar.defaultProps = {
    icon: '	fas fa-rainbow',
    title: 'Bass Blogs'
}

export default Navbar
