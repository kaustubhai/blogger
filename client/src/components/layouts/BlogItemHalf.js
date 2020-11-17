import React, { useContext } from "react";
import AuthContext from '../../context/auth/AuthContext'
import BlogContext from '../../context/Blogs/BlogContext'

const BlogItemHalf = ({ blog }) => {

  const description = blog.description;
  const authContext = useContext(AuthContext)
  const blogContext = useContext(BlogContext)

  const { user } = authContext
  const { deleteBlog } = blogContext

  const onClickDelete = (e) => {
    deleteBlog(blog._id)
  }

  if(user)
    return (
      <div className={user._id === blog.author ? 'blog-item-half card' : 'card'}>
        <div className="btn-hide-row">
          <button className='btn-edit'><a href={`/blog/update-one/${blog._id}`}>Edit</a></button>  
          <button style={{cursor: "pointer"}} className='btn-edit' onClick={ onClickDelete }>Delete</button>  
        </div>
        <img
            src={blog.image}
            height="200px"
            alt={blog.title}
            style={{ objectFit: "cover", marginBottom: "15px", marginTop: "5px" }}
          />

          <h1 style={{ marginBottom: "10px" }}>{blog.title}</h1>
          <hr />
          <p className="desc" style={{marginTop: '15px'}}>
            {description}
          </p>
          <div style={{ marginTop: "15px" }}>
            <h4 style={{ display: "inline" }}>{blog.initials.charAt(0).toUpperCase() + blog.initials.slice(1)}</h4>
            <a style={{ float: "right" }} href={`/blog/read-one/${blog._id}`}>
              Read More
            </a>
          </div>
        </div>
    );
  
    return (
      <div className="card">  
      <img
          src={blog.image}
          height="200px"
          alt={blog.title}
          style={{ objectFit: "cover", marginBottom: "15px", marginTop: "5px" }}
        />

        <h1 style={{ marginBottom: "10px" }}>{blog.title}</h1>
        <hr />
        <p className="desc" style={{marginTop: '15px'}}>
          {description}
        </p>
        <div style={{ marginTop: "15px" }}>
          <h4 style={{ display: "inline" }}>{blog.initials.charAt(0).toUpperCase() + blog.initials.slice(1)}</h4>
          <a style={{ float: "right" }} href={`/blog/read-one/${blog._id}`}>
            Read More
          </a>
        </div>
      </div>
  );
};

export default BlogItemHalf;
