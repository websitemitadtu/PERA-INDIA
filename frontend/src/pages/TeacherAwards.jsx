import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Awards.css'; // You can reuse Scholarships.css with minor tweaks

const awards = [
  {
    id: 1,
    title: "Sir Vishweshwaraiah PERA Sr Researcher Award",
    date: "Dec 27",
    excerpt: "Three Awards: Diamond/ Platinum/ Gold. The applicant must be fulltime employee, student or research scholar...",
    slug: "sr-researcher-award"
  },
  {
    id: 2,
    title: "PERA Jr Researcher Award",
    date: "Dec 27",
    excerpt: "Three Awards: Outstanding/ Excellent/ Best. The applicant must be fulltime employee or student at School/College...",
    slug: "jr-researcher-award"
  },
  {
    id: 3,
    title: "Swami Vivekanand PERA Teacher Award",
    date: "Dec 27",
    excerpt: "Three Awards: Pandit/ Dhrishta/ Guru. The applicant must be a fulltime teacher at a senior college or university...",
    slug: "swami-vivekanand-teacher-award"
  },
  {
    id: 4,
    title: "Smt. Savitribai Phule PERA Teacher Award",
    date: "Dec 27",
    excerpt: "Three Awards: Adhyapak / Upadhyaya / Acharya. The applicant must be fulltime teacher from 8th to 12th standard...",
    slug: "savitribai-phule-teacher-award"
  }
];

const TeacherAwards = () => {
  return (
    <div className="award-container">
      <h2>PERA Researcher Awards</h2>
      <p className="eligibility-note">
        <strong>PERA Awards Nomination Eligibility Criteria:</strong> The applicant must fulfill the following eligibility criteria to apply under different categories of awards.
      </p>
      <div className="award-cards">
        {awards.map((item) => (
          <div key={item.id} className="award-card">
            <span className="award-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <Link to={`/awards/${item.slug}`} className="read-more-btn">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherAwards;
