import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Scholership.css'; // Include your styles here

const scholarships = [
  {
    id: 1,
    title: "Dr. APJ Abdul Kalam PERA INDIGENT National Scholarship",
    date: "Dec 27",
    excerpt: "The students studying or passed in class 10th and wishing to purse higher education in any field can apply...",
    slug: "apj-abdul-kalam-scholarship"
  },
  {
    id: 2,
    title: "Dr. Raghunath Mashelkar PERA Genius National Scholarship",
    date: "Dec 27",
    excerpt: "The students studying or passed in class 11th or 12th or Diploma and wishing to pursue higher education...",
    slug: "raghunath-mashelkar-scholarship"
  },
  {
    id: 3,
    title: "Dr. Vijay Bhatkar PERA Aspire National Scholarship",
    date: "Dec 27",
    excerpt: "The students studying or passed in class 11th or 12th (Art/ Commerce) and wishing to pursue higher education...",
    slug: "vijay-bhatkar-scholarship"
  },
  {
    id: 4,
    title: "PERA IGNITE Sports National Scholarship",
    date: "Dec 27",
    excerpt: "Age of applicant should be between 15 to 18 years. The complete selection process works according to...",
    slug: "pera-ignite-sports-scholarship"
  }
];

const Scholarships = () => {
  return (
    <div className="scholarship-container">
      <h2>PERA Scholarships</h2>
      <p className="eligibility-note">
        <strong>PERA Scholarship Eligibility Criteria:</strong> The applicant must fulfill the following eligibility criteria to apply for the scholarship.
      </p>
      <div className="scholarship-cards">
        {scholarships.map((item) => (
          <div key={item.id} className="scholarship-card">
            <span className="scholarship-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <Link to={`/scholarships/${item.slug}`} className="read-more-btn">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scholarships;
