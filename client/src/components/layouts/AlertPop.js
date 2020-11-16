import React, { useContext } from 'react'
import AuthContext from '../../context/auth/AuthContext'

const AlertPop = () => {

    const authContext = useContext(AuthContext)

    const { errors, removeAlert } = authContext

    if (errors) {
        
    setTimeout(() => {
        removeAlert()
    }, 4000)
        
    return (
        <div className="card m-1 p-1 center-all" style={{ position: 'absolute', right: 10, bottom: 10, borderRadius: '15px', boxShadow: '0 10px 6px -6px #777', maxWidth: '1100px', backgroundColor: '#000', color: "#fff", padding: '1rem 3rem'}}>
            <p>{ errors }</p>
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
