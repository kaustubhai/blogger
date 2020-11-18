import React, { useState, useContext, useEffect } from 'react'
import BlogContext from '../../context/Blogs/BlogContext'

const AddBlog = props => {

    const blogContext = useContext(BlogContext)

    const { addNewBlog, blog } = blogContext

    const [title, setTitle] = useState('Your Title Goes Here')
    const [image, setImage] = useState('https://via.placeholder.com/500x200.png?text=Your+Blog+Image+Goes+Here')
    const [description, setDescription] = useState('Your Blog Content goes here')

    const blogToBe = { title, image, description }
    
    const onSubmit = (e) => {
        e.preventDefault()
        addNewBlog(blogToBe)
    }
        
    if (blog)
        props.history.push(`/blog/read-one/${blog._id}`)

    return (
        <div className="container ">
            <h1 className="all-center">Add a new Blog</h1>
            <div className="p-1 my-1 form-container">
                <form autoComplete="off" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title <span className="text-danger">*</span> </label>
                        <input type="text" name="title" onChange={ (e) => { setTitle(e.target.value) } } placeholder="Your Title Goes Here"  required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image URL <span className="text-danger">*</span> </label>
                        <input type="url" name="image" onChange={ (e) => { setImage(e.target.value) } } placeholder="Enter Image URL" required ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description <span className="text-danger">*</span> </label>
                        <textarea onChange={ (e) => setDescription(e.target.value)}  type="text" name="description" id="textarea1" class="materialize-textarea" rows="7" placeholder="Your Blog Content goes here" required></textarea>
                    </div>
                    <button type="submit" className="btn py-2 right my-2 black text-white btn-block" style={{width: '25%'}}>Add new Blog</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlog
