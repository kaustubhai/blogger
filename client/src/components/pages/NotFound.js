import React from 'react'
import Header from '../layouts/Header'

const NotFound = () => {
    return (
        <div className="container">
            <Header />
            <p className="flow-text center-align">Seems Like you are lost. <a style={{textDecoration: 'underline'}} href="/">Go Back Home</a></p>
        </div>
    )
}

export default NotFound
