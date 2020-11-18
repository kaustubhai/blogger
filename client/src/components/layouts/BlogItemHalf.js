import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../../context/auth/AuthContext'
import BlogContext from '../../context/Blogs/BlogContext'

const BlogItemHalf = ({ blog }) => {

  const description = blog.description;
  const authContext = useContext(AuthContext)
  const blogContext = useContext(BlogContext)

  const { user } = authContext
    
  if(user)
    return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
              <img src={blog.image}
              height="200px"
              alt={blog.title}
              style={{ objectFit: "cover", marginBottom: "15px", marginTop: "5px" }} />
              
                  <Link style={{display: user._id === blog.author ? '' : 'none'}} className="btn-floating halfway-fab waves-effect waves-light red" to={`/blog/update-one/${blog._id}`}><i className="material-icons">edit</i></Link>
                
          </div>
          
          <div className="card-content">
          <span className="card-title">{blog.title}</span>
            <p className="desc" style={{marginTop: '15px'}}>
               {description}
            </p>
          </div>
          <div className="card-action">
            <Link className="text-right" to={`/blog/read-one/${blog._id}`}>Read Blog</Link>
          </div>
        </div>
      </div>
    );
  
    return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
              <img src={blog.image}
              height="200px"
              alt={blog.title}
              style={{ objectFit: "cover", marginBottom: "15px", marginTop: "5px" }}/>
          </div>
          <div className="card-content">
          <span className="card-title">{blog.title}</span>
            <p className="desc" style={{marginTop: '15px'}}>
               {description}
            </p>
          </div>
          <div className="card-action">
            <Link className="text-right" to={`/blog/read-one/${blog._id}`}>Read Blog</Link>
          </div>
        </div>
      </div>
  );
};

export default BlogItemHalf;
