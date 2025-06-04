import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/styles/Awards.css';

const awardDetails = {
  "sr-researcher-award": {
    title: "Sir Vishweshwaraiah PERA Sr Researcher Award",
    content: [
      "Three Awards: Diamond/ Platinum/ Gold",
      "Eligibility Criteria: The applicant must be a full-time employee, student or research scholar at any Higher Education Institute, University, or equivalent institution."
    ],
    previous: "/awards/savitribai-phule-teacher-award",
    next: "/awards/jr-researcher-award"
  },
  "jr-researcher-award": {
    title: "PERA Jr Researcher Award",
    content: [
      "Three Awards: Outstanding/ Excellent/ Best",
      "Eligibility Criteria: The applicant must be a full-time employee or student at a school, senior college, higher education institute, or university."
    ],
    previous: "/awards/sr-researcher-award",
    next: "/awards/swami-vivekanand-teacher-award"
  },
  "swami-vivekanand-teacher-award": {
    title: "Swami Vivekanand PERA Teacher Award",
    content: [
      "Three Awards: Pandit/ Dhrishta/ Guru",
      "Eligibility Criteria: The applicant must be a full-time teacher at a senior college, higher education institute, or university."
    ],
    previous: "/awards/jr-researcher-award",
    next: "/awards/savitribai-phule-teacher-award"
  },
  "savitribai-phule-teacher-award": {
    title: "Smt. Savitribai Phule PERA Teacher Award",
    content: [
      "Three Awards: Adhyapak / Upadhyaya / Acharya",
      "Eligibility Criteria: The applicant must be a full-time teacher teaching students from 8th to 12th standard."
    ],
    previous: "/awards/swami-vivekanand-teacher-award",
    next: "/scholarships/apj-abdul-kalam-scholarship"
  }
};

const AwardDetail = () => {
  const { slug } = useParams();
  const data = awardDetails[slug];

  if (!data) return <p>Award not found.</p>;

  return (
    <div className="award-detail">
      <h2>{data.title}</h2>
      <div className="award-body">
        {data.content.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
      <div className="navigation-links">
        <Link to={data.previous}>← Previous post</Link>
        <Link to={data.next}>Next post →</Link>
      </div>

      <div className="comment-section">
        <h4>Leave a Reply</h4>
        <form>
          <textarea placeholder="Comment *" required />
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="url" placeholder="Website" />
          <label>
            <input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.
          </label>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default AwardDetail;
