import React, { useState } from "react";
import axios from 'axios'

const BlogItemHalf = ({ blog }) => {

  const [author, setAuthor] = useState('Kaustubh')

  const getAuthor = (id) => {
    axios.get(`/api/blog/author/${id}`)
      .then((res) => {
        const auth = res.data.name;
        setAuthor(auth.charAt(0).toUpperCase() + auth.slice(1))
      })
  }
  
  getAuthor(blog.author)

  return (
    <div>
      <div className="card">
        <img
          src={blog.image}
          height="200px"
          alt={blog.title}
          style={{ objectFit: "cover", marginBottom: "15px", marginTop: "5px" }}
        />

        <h1 style={{ marginBottom: "10px" }}>{blog.title}</h1>
        <hr />
        <p style={{ marginTop: "15px" }}>
          {blog.description}
        </p>
        
        <div style={{ marginTop: "15px" }}>
          <h4 style={{ display: "inline" }}>{author}</h4>
          <a style={{ float: "right" }} href="#!">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogItemHalf;
