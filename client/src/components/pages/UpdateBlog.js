import React, { useState, useContext, useEffect } from 'react'
import BlogContext from '../../context/Blogs/BlogContext'

const UpdateBlog = props => {

    const blogContext = useContext(BlogContext)
    const { updateBlog, blog, loadBlog, loading, alert } = blogContext

    const id = window.location.href.split('-')[1].split('/')[1]
    var x = 1
    useEffect(() => {
        loadBlog(id)
            .then(() => {
                setTitle(blog.title)
                setImage(blog.image)
                setDescription(blog.description)
                console.log('suc')
            }).catch(() => {
                setTitle('')
                setImage('')
                setDescription('')
                console.log('run')
            })
        // eslint-disable-next-line
    }, [loading])

    const [title, setTitle ] = useState('')
    const [image, setImage ] = useState('')
    const [description, setDescription ] = useState('')

    if (!blog){
        x++
        console.log(x)
        return <h3>Loading...</h3>
    }

    if (alert === 'Blog Updated Successfully')
        props.history.push(`/blog/read-one/${blog._id}`)
    
    const blogToBe = { title, image, description }
    
    const onSubmit = (e) => {
        e.preventDefault()
        updateBlog(blogToBe, id)
        console.log(blogToBe)
    } 

    return (
        <div className="container ">
            <h1 className="all-center">Update your Blog</h1>
            <div className="p-1 my-1 form-container">
                <form autoComplete="off" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title <span className="text-danger">*</span> </label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" placeholder="Your Title Goes Here" value={title} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL <span className="text-danger">*</span> </label>
                        <input type="url" onChange={(e) => setImage(e.target.value)} name="image" placeholder="Enter Image URL" value={image} required ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description <span className="text-danger">*</span> </label>
                        <textarea onChange={(e) => setDescription(e.target.value)} rows="6" type="text" name="description" value={description} placeholder="Your Blog Content goes here" required></textarea>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block" value="Update my Blog" style={{padding: '10px 0px', marginTop: '25px'}}/>
                </form>
            </div>
        </div>
    )
}

export default UpdateBlog
