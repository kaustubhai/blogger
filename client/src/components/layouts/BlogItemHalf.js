import React from "react";

const BlogItemHalf = ({ blog }) => {

  const description = blog.description;


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
