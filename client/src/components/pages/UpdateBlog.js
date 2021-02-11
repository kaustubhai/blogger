import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BlogContext from '../../context/Blogs/BlogContext'
import Editor from '../layouts/Editor'

const UpdateBlog = props => {

    const blogContext = useContext(BlogContext)
    const { updateBlog, blog, loadBlog, loading, alert, deleteBlog, getUserBlogs, blogs } = blogContext

    const id = window.location.href.split('-')[1].split('/')[1]
    var x = 1
    useEffect(() => {
        loadBlog(id)
            .then(() => {
                setTitle(blog.title)
                setImage(blog.image)
                setDescription(blog.description)
            }).catch(() => {
                setTitle('')
                setImage('')
                setDescription('')
            })
        
            getUserBlogs()
        // eslint-disable-next-line
    }, [loading])

    const [title, setTitle ] = useState('')
    const [image, setImage ] = useState('')
    const [description, setDescription ] = useState('')

    if (!blog){
        x++
        return <h3>Loading...</h3>
    }

    if (alert === 'Blog Updated Successfully')
        props.history.push(`/blog/read-one/${blog._id}`)
    
    const blogToBe = { title, image, description }
    
    const onSubmit = (e) => {
        e.preventDefault()
        updateBlog(blogToBe, id)
    } 

    const onClickDelete = (e) => {
        deleteBlog(blog._id)
    }

    return (
        <div className="container ">
            <div className="p-1 my-1 form-container">
                <form autoComplete="off" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input className="material-not-hover" style={{fontSize: "4em", height: "1.5em"}} type="text" name="title" onChange={ (e) => { setTitle(e.target.value) } } value={title} placeholder="Your Title Goes Here"  required></input>
                    </div>
                    <div className="form-group">
                        <input className="material-not-hover" type="url" onChange={(e) => setImage(e.target.value)} name="image" placeholder="Enter Image URL" value={image} required ></input>
                    </div>
                    <div className="form-group">
                        <Editor description={description} setDescription={setDescription}/>
                    </div>
                    <Link to="/user/dashboard"><button onClick={onClickDelete} type="submit" className="btn py-2 left my-2 black text-white btn-block" style={{width: '25%'}}>Delete Blog</button></Link>
                    <button type="submit" className="btn py-2 right my-2 black text-white btn-block" style={{width: '25%'}}>Update my Blog</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateBlog
