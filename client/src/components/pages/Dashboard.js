import React, { useContext, useEffect } from 'react'
import BlogItemHalf from '../layouts/BlogItemHalf'
import BlogContext from '../../context/Blogs/BlogContext'

const Dashboard = () => {

    const blogContext = useContext(BlogContext)
    const { blogs, getBlogs } = blogContext;

    useEffect(() => {
        getBlogs()
        // eslint-disable-next-line
    }, [])

    if (!blogs || blogs.length === 0 )
        return (
            <div className="container grid grid-2">
                <h3>No Blogs Found. Try Refreshing</h3>
            </div>
        )

    return (
        <div className="container grid grid-2">
            { blogs.map((blog) => <BlogItemHalf key={blog._id} blog={blog}></BlogItemHalf>)}
        </div>
    )
}

export default Dashboard
