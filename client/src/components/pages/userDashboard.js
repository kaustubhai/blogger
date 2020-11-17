import React, { useContext, useEffect } from 'react'
import BlogContext from '../../context/Blogs/BlogContext'
import BlogItemHalf from '../layouts/BlogItemHalf'

const UserDashboard = () => {

    const blogContext = useContext(BlogContext)
    const { getUserBlogs, blogs } = blogContext

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
        <div className="container grid grid-2">
            { blogs.map((blog) => <BlogItemHalf key={blog._id} blog={blog}></BlogItemHalf>)}
        </div>
    )
}

export default UserDashboard
