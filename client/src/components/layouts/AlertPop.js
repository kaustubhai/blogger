import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'
import BlogContext from '../../context/Blogs/BlogContext'

const AlertPop = () => {

    const authContext = useContext(AuthContext)
    const blogContext = useContext(BlogContext)

    const { errors, removeAlert } = authContext
    const { alert, removeBlogAlert } = blogContext

    if (errors && errors !== 'Token is not Valid') {
        setTimeout(() => {
            removeAlert()
        }, 4000)
            
        return (
            <div className="card m-1 p-1 center-all" style={{ position: 'absolute', right: 10, bottom: 10, borderRadius: '15px', boxShadow: '0 10px 6px -6px #777', maxWidth: '1100px', backgroundColor: '#000', color: "#fff", padding: '1rem 3rem'}}>
                <p>{ errors }</p>
            </div>
        )
    }

    if (alert) {
        setTimeout(() => {
            removeBlogAlert()
        }, 4000)
            
        return (
            <div className="card m-1 p-1 center-all" style={{ position: 'absolute', right: 10, bottom: 10, borderRadius: '15px', boxShadow: '0 10px 6px -6px #777', maxWidth: '1100px', backgroundColor: '#000', color: "#fff", padding: '1rem 3rem'}}>
                <p>{ alert }</p>
            </div>
        )
    }

    return (
        <div className="card m-1 p-1 center-all" style={{ display: 'none', borderRadius: '15px', boxShadow: '0 10px 6px -6px #777', maxWidth: '1100px', backgroundColor: '#000', color: "#fff"}}>
            <p>Passwords dont match</p>
        </div>
    )
}

export default AlertPop
