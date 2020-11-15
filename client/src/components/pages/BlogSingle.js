import React, { useContext, useEffect } from 'react'
import BlogContext from '../../context/Blogs/BlogContext'

const BlogSingle = () => {

    const blogContext = useContext(BlogContext)

    const { getOneBlog, blog } = blogContext

    const id = window.location.href.split('-')[1].split('/')[1]

    useEffect(() => {
        getOneBlog(id)
        // eslint-disable-next-line
    }, [])
    
    if (!blog)
        return <h3 className="p-2">Loading...</h3>

    const { title, description, image, date } = blog

    return (
        <div className="container">
            <div className="card">
            <img height="400px" style={{ objectFit: "cover", marginBottom: "5px", marginTop: "5px" }} src={image} alt={title} />
            </div>
            <div className="all-center">
                <h1 className="all-center">{title}</h1>
                <h4>{ }</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BlogSingle
