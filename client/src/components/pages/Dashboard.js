import React, { useContext, useEffect } from 'react'
import BlogItemHalf from '../layouts/BlogItemHalf'
import BlogContext from '../../context/Blogs/BlogContext'
import PreLoader from '../layouts/PreLoader'
import Header from '../layouts/Header'

const Dashboard = () => {

    const blogContext = useContext(BlogContext)
    const { blogs, getBlogs, loading } = blogContext;

    useEffect(() => {
        getBlogs()
        // eslint-disable-next-line
    }, [blogs])

    if (loading)
        <PreLoader/>
    if (!blogs || blogs.length === 0 )
        return (
            <div className="grid grid-2">
                <Header/>
            </div>
        )

    return (
        <div className="container">
            <Header/>
            <div className="row">
                { blogs.map((blog) => <BlogItemHalf key={blog._id} blog={blog}></BlogItemHalf>)}
            </div>
        </div>
    )
}

export default Dashboard
