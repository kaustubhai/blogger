import React, { useContext, useEffect } from 'react'
import BlogContext from '../../context/Blogs/BlogContext'
import AuthContext from '../../context/auth/AuthContext'
import BlogItemHalf from '../layouts/BlogItemHalf'

const UserDashboard = () => {

    const blogContext = useContext(BlogContext)
    const authContext = useContext(AuthContext)
    const { getUserBlogs, blogs } = blogContext
    const { user } = authContext

    useEffect(() => {
        console.log('hello')
        getUserBlogs()

        // eslint-disable-next-line
    }, [blogs])

    if(!blogs)
        return (
            <div>
                Loading
            </div>
        )
    return (
        <div className="container">
            <h3>{ user.name.charAt(0).toUpperCase() + user.name.slice(1) }</h3>
            <h6><strong className="grey-text bold">Username:</strong> { user.username }<span className="right"><strong className="grey-text bold">Blogs Count:</strong> { blogs.length }</span></h6>
            
            <hr className="divider"></hr>
            <div style={{marginTop: '50px'}} className="row">
                { blogs.map((blog) => <BlogItemHalf key={blog._id} blog={blog}></BlogItemHalf>)}
            </div>
        </div>
    )
}

export default UserDashboard
