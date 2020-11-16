import React, { useContext, useEffect } from 'react'
import BlogContext from '../../context/Blogs/BlogContext'
import Moment from 'react-moment'

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

    const { title, description, image, date, initials } = blog

    return (
        <div className="container">
            <div className="card">
            <img height="400px" style={{ objectFit: "cover", marginBottom: "5px", marginTop: "5px" }} src={image} alt={title} />
            </div>
            <div className="all-center">
                <h1 className="all-center">{title}</h1>
                <h4 style={{marginBottom: '50px'}}>- { initials }</h4>
                <p><i class="fas fa-quote-left fa-3x fa-pull-left "></i>{ description }</p>
            </div>
            <div style={{marginTop: '25px'}} className="card">
                <h4 style={{paddingLeft: '25px', display: 'inline'}}><i className="fas fa-user-edit"></i> Author: { initials.charAt(0).toUpperCase() + initials.slice(1) }</h4>
                <h4 style={{ paddingRight: '25px', float: 'right', display: 'inline' }}><i className="far fa-calendar-check"></i> Last Updated: <Moment format="DD-MMM-YYYY">{ date}</Moment></h4>
            </div>
        </div>
    )
}

export default BlogSingle
