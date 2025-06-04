import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AwardDetail.css'; // Reuse shared CSS

const SrResearcherAward = () => {
  return (
    <div className="scholarship-detail">
      <h2>Sir Vishweshwaraiah PERA Sr Researcher Award</h2>
      <p><strong>Three Awards:</strong> Diamond / Platinum / Gold</p>

      <h3>Eligibility Criteria:</h3>
      <ul>
        <li>The applicant must be a full-time employee, student, or research scholar at a Higher Education Institute, University, or any other research organization or lab.</li>
        <li>The applicant must have a distinct research contribution in the respective domain.</li>
        <li>He / She must have a minimum of 3 years of research-related experience in the respective domain.</li>
        <li>The age of the applicant should be more than 35 years.</li>
      </ul>

      <div className="navigation-links">
        <Link to="/awards/jr-researcher-award">← Previous post: PERA Jr Researcher Award</Link>
        <Link to="/awards/savitribai-phule-teacher-award">Next post: Smt. Savitribai Phule PERA Teacher Award →</Link>
      </div>

      <div className="comment-section">
        <h4>Leave a Reply</h4>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form>
          <label>Comment *</label>
          <textarea required />

          <label>Name *</label>
          <input type="text" required />

          <label>Email *</label>
          <input type="email" required />

          <label>Website</label>
          <input type="url" />

          <label>
            <input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.
          </label>

          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default SrResearcherAward;
