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
            <Header />
            <h5 className="grey-text center-align"><strong className="black-text">Read</strong> blogs from <strong className="black-text">All</strong> user for <strong className="black-text">Free</strong></h5>
            <h6 style={{paddingBottom: '25px'}} className="center-align">This Part will always be free we Promise.</h6>
            <div style={{marginBottom: '50px'}} className="divider z-depth-2"></div>
            <div className="row">
                { blogs.map((blog) => <BlogItemHalf key={blog._id} blog={blog}></BlogItemHalf>)}
            </div>
        </div>
    )
}

export default Dashboard
