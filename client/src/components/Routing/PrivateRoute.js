import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext'
import Preloader from '../layouts/PreLoader'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const authContext = useContext(AuthContext)

    const { isAuthenticated, loading } = authContext

    return (
        <Route {...rest} render={
            props => {
                if (isAuthenticated)
                    return <Component {...props} />
                else if(!isAuthenticated && !loading) {
                    return <Redirect to="/login" />
                }
            }
        }>
        </Route>
    )
}

export default PrivateRoute