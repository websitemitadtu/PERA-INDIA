import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Scholership.css'; // Use a new CSS file or reuse existing styles

const awards = [
  {
    id: 1,
    title: "Sir Vishweshwaraiah PERA Sr Researcher Award",
    date: "Dec 27",
    excerpt: "Three Awards: Diamond/ Platinum/ Gold. Eligibility Criteria: The applicant must be fulltime employ or student or research scholar at Higher Education Institute/University/ any other...",
    slug: "sr-researcher-awards"
  },
  {
    id: 2,
    title: "PERA Jr Researcher Award",
    date: "Dec 27",
    excerpt: "Three Awards: Outstanding/ Excellent/Best. Eligibility Criteria: The applicant must be fulltime employ or student at School/Senior College/ Higher Education Institute/ University. The applicant must be...",
    slug: "jr-researcher-awards"
  },
  {
    id: 3,
    title: "Swami Vivekanand PERA Teacher Award",
    date: "Dec 27",
    excerpt: "Three Awards: Pandit/ Dhrishta/ Guru. Eligibility Criteria: The applicant must be fulltime teacher at senior college/ higher education institute/ university teacher. He / She...",
    slug: "swami-vivekanand-researcher-awards"
  },
  {
    id: 4,
    title: "Smt. Savitribai Phule PERA Teacher Award",
    date: "Dec 27",
    excerpt: "Three Awards: Adhyapak / Upadhyaya / Acharya. Eligibility Criteria: The applicant must be fulltime teacher for the classes of 8th Std to 12th Std...",
    slug: "savitribai-phule-researcher-awards"
  }
];

const ResearcherAwards = () => {
  return (
    <div className="scholarship-container">
      <h2>PERA Researcher Awards</h2>
      <p className="eligibility-note">
        <strong>PERA Awards Nomination Eligibility Criteria:</strong> The applicant must fulfill the following eligibility criteria to apply different categories of Awards:
      </p>
      <div className="scholarship-cards">
        {awards.map((item) => (
          <div key={item.id} className="scholarship-card">
            <span className="scholarship-date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <Link to={`/awards/${item.slug}`} className="read-more-btn">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearcherAwards;
