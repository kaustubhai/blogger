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
            <img className="materialboxed z-depth-2" style={{ objectFit: "cover", marginBottom: "5px", marginTop: "5px", height:"400px", width: '100%', minWidth: '100%', cursor: 'initial' }} src={image} alt={title} />
            </div>
            <div>
                <h2 className="center-align">{title}</h2>
                <h5 className="right-align" style={{marginBottom: '50px'}}>- { initials }</h5>
                <p style={{marginBottom:'50px'}} className="center-align"><i class="fas fa-quote-left fa-3x fa-pull-left "></i>{ description }</p>
            </div>
            <div style={{marginTop: '25px', padding: '15px'}} className="card row">
                <h6 className="col s12 m6 center-align" style={{paddingLeft: '25px', display: 'inline-block'}}><i className="fas fa-user-edit"></i> Author: { initials.charAt(0).toUpperCase() + initials.slice(1) }</h6>
                <h6 className="col s12 m6 right center-align" style={{ paddingRight: '25px', display: 'inline-block' }}><i className="far fa-calendar-check"></i> Last Updated: <Moment format="DD-MMM-YYYY">{ date}</Moment></h6>
            </div>
        </div>
    )
}

export default BlogSingle
