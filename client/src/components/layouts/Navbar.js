  
import React, { useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';


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

    const { logoutUser, loadUser, user, isAuthenticated, loading } = authContext

    useEffect(() => { 
        loadUser()
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
