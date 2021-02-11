import React, { useState, useContext, useEffect } from 'react'
import BlogContext from '../../context/Blogs/BlogContext'
import Editor from '../layouts/Editor'

const AddBlog = props => {

    const blogContext = useContext(BlogContext)

    const { addNewBlog, blog } = blogContext

    const [title, setTitle] = useState('Give your blog a title here')
    const [image, setImage] = useState('https://via.placeholder.com/500x200.png?text=Your+Blog+Image+Goes+Here')
    const [description, setDescription] = useState("<p>Start Writing Here</p>")

    const blogToBe = { title, image, description }
    
    const onSubmit = (e) => {
        e.preventDefault()
        addNewBlog(blogToBe)
    }
        
    if (blog)
        props.history.push(`/blog/read-one/${blog._id}`)

    return (
        <div className="container ">
            <div className="p-1 my-1 form-container">
                <form autoComplete="off" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input className="material-not-hover" style={{fontSize: "4em", height: "1.5em"}} type="text" name="title" onChange={ (e) => { setTitle(e.target.value) } } value={title} placeholder="Your Title Goes Here"  required></input>
                    </div>
                    <div className="form-group">
                        <input className="material-not-hover" type="url" name="image" onChange={ (e) => { setImage(e.target.value) } } placeholder="Enter Image URL" required ></input>
                    </div>
                    <div className="form-group">
                        <Editor description={description} setDescription={setDescription}/>
                    </div>
                    <button type="submit" className="btn py-2 right my-2 black text-white btn-block" style={{width: '25%'}}>Add new Blog</button>
                </form>
            </div>
        </div>
    )
}

export default AddBlog
