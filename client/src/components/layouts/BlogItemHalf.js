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
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
              <img src={blog.image}
              height="200px"
              alt={blog.title}
              style={{ objectFit: "cover", marginBottom: "15px", marginTop: "5px" }} />
              
                  <a style={{display: user._id === blog.author ? '' : 'none'}} class="btn-floating halfway-fab waves-effect waves-light red" href={`/blog/update-one/${blog._id}`}><i class="material-icons">edit</i></a>
                
          </div>
          
          <div class="card-content">
          <span class="card-title">{blog.title}</span>
            <p className="desc" style={{marginTop: '15px'}}>
               {description}
            </p>
          </div>
        </div>
      </div>
    );
  
    return (
      <div class="col s12 m6">
        <div class="card">
          <div class="card-image">
              <img src={blog.image}
              height="200px"
              alt={blog.title}
              style={{ objectFit: "cover", marginBottom: "15px", marginTop: "5px" }}/>
          </div>
          <div class="card-content">
          <span class="card-title">{blog.title}</span>
            <p className="desc" style={{marginTop: '15px'}}>
               {description}
            </p>
          </div>
        </div>
      </div>
  );
};

export default BlogItemHalf;
