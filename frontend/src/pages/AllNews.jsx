import React from "react";
import "../assets/styles/AllNews.css";

const allNews = [
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

const AllNews = () => {
  return (
    <div className="all-news-container">
      <h1 className="all-news-title">All News</h1>
      <div className="news-grid">
        {allNews.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.img} alt={news.title} className="news-img" />
            <div className="news-card-body">
              <h3 className="news-card-title">{news.title}</h3>
              <p className="news-card-date">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNews;
