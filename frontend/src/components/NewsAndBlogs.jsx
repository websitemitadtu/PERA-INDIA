import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/NewsAndBlogs.css';

const latestNews = [
  {
    id: 1,
    title: "One Day Round Table Conference Organized by PERA",
    date: "April 4, 2025",
    img: "/assets/News_Blogs/news.jpeg"
  },
  {
    id: 2,
    title: "Empowering State Private Universities",
    date: "April 4, 2025",
    img: "/assets/News_Blogs/pera_conf.png"
  }
];

const latestBlogs = [
  {
    id: 1,
    title: "The Future of Jobs Report 2025",
    date: "April 16, 2025",
    img: "/assets/News_Blogs/PERA-News-01.jpg"
  },
  {
    id: 2,
    title: "World Economic Forum Survey",
    date: "April 16, 2025",
    img: "/assets/News_Blogs/PERA-News-03.jpg"
  }
];

const NewsAndBlogs = () => {
  const navigate = useNavigate();

  return (
    <div className="news-blogs-container">
      <div className="section-card">
        <div className="card-header">
          <h2 className="section-title">Latest News</h2>
          <button className="purple-btn" onClick={() => navigate('/all-news')}>
            View All →
          </button>
        </div>
        {latestNews.map(news => (
          <div className="card-item" key={news.id}>
            <img src={news.img} alt={news.title} className="card-image" />
            <div className="card-content">
              <h4 className="item-title">{news.title}</h4>
              <p className="item-date">{news.date}</p>
              <button className="purple-btn" onClick={() => navigate(`/news/${news.id}`)}>
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-card">
        <div className="card-header">
          <h2 className="section-title">Latest Blogs</h2>
          <button className="purple-btn" onClick={() => navigate('/all-blogs')}>
            View All →
          </button>
        </div>
        {latestBlogs.map(blog => (
          <div className="card-item" key={blog.id}>
            <img src={blog.img} alt={blog.title} className="card-image" />
            <div className="card-content">
              <h4 className="item-title">{blog.title}</h4>
              <p className="item-date">{blog.date}</p>
              <button className="purple-btn" onClick={() => navigate(`/blog/${blog.id}`)}>
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsAndBlogs;
