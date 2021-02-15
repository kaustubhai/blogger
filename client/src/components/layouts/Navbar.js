  
import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import GoogleLogin from 'react-google-login';

const Navbar = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
     };

    
    const authContext = useContext(AuthContext)

    const { logoutUser, loadUser, user, isAuthenticated, registerUser, loginUser } = authContext

    const responseGoogle = async (response) => {
        const userRegister = { name: `${response.profileObj.givenName} ${response.profileObj.familyName}`, email: response.profileObj.email, username: response.profileObj.email.split('@')[0], password: response.profileObj.googleId }
        console.log(userRegister);
        const chk = await registerUser(userRegister)
        const userLogin = { email: response.profileObj.email, password: response.profileObj.googleId }
        if (!chk)
            loginUser(userLogin)
        console.log(userLogin);
    }

    useEffect(() => { 
        loadUser()
        console.log(process.env);
        // eslint-disable-next-line
    }, [])
    
    const onClick = (e) => {
        e.preventDefault()
        logoutUser()
    }
    
    if (!isAuthenticated && !user) {
        return (
            <nav style={{marginBottom: '50px'}} className="black ">
                <div style={{paddingLeft: '50px', paddingRight: '50px'}} className="nav-wrapper">
                    <a href="/" className="brand-logo">Bass Blogs<i className="material-icons">terrain</i></a>
                    <ul id="nav-mobile" className="right">
                        <li >    
                            <a className="waves-effect white black-text waves-light btn" href="/login">Get Started</a>
                            <GoogleLogin
                                clientId={process.env.REACT_APP_CLIENT_ID}
                                buttonText="Login"
                                render={renderProps => (
                                    <button className="waves-effect white black-text waves-light btn"  onClick={renderProps.onClick} disabled={renderProps.disabled}> Google</button>
                                  )}
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    else {
        return (
            <nav style={{marginBottom: '50px'}} className="black">
                <div style={{paddingLeft: '50px', paddingRight: '50px'}} className="nav-wrapper">
                    <a href="/" className="col s6 brand-logo">Bass Blogs<i className="material-icons">terrain</i></a>
                    <ul id="nav-mobile" className="right">
                        <li>
                        <Button className="waves-effect flat white-text waves-light btn" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                                Hello {user && user.name}    
                        </Button>
                        <Menu
                            id="fade-menu"
                            className="my-3 dropdown"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <a href="/"><MenuItem className="menuItem">Home</MenuItem></a>
                            <a href="/user/dashboard"><MenuItem className="menuItem">Profile</MenuItem></a>
                            <a href="/blog/add-new"><MenuItem className="menuItem">Write a Blog</MenuItem></a>
                            <MenuItem><a href="/coming-soon"><button className=" btn white black-text" style={{width: '100%', marginTop: '25px', border: '1px solid #000'}}>Upgrade</button></a></MenuItem>
                            <MenuItem><button className="btn black white-text" href="/" style={{width: '100%'}} onClick={onClick}>Signout</button></MenuItem>
                        </Menu>
                        </li>
                        <li >    
                            <a className="waves-effect flat white black-text waves-light btn" href="/blog/add-new">Write a Blog</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )    
    }
}

export default Navbar
