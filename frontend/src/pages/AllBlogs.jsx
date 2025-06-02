
import React from "react";
import "../assets/styles/AllBlogs.css";

const allBlogs = [
  {
    id: 1,
    title: "The Future of Jobs Report 2025",
    date: "April 16, 2025",
    img: "/assets/News_Blogs/PERA-News-01.jpg",
  },
  {
    id: 2,
    title: "World Economic Forum Survey",
    date: "April 16, 2025",
    img: "/assets/News_Blogs/PERA-News-03.jpg",
  },
  
];

const AllBlogs = () => {
  return (
    <div className="all-blogs-container">
      <h1 className="all-blogs-title">All Blogs</h1>
      <div className="blogs-grid">
        {allBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.img} alt={blog.title} className="blog-img" />
            <div className="blog-card-body">
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-card-date">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
