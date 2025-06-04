import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AwardDetail.css'; // Reuse shared CSS

const JrResearcherAward = () => {
  return (
    <div className="scholarship-detail">
      <h2>PERA Jr Researcher Award</h2>
      <p><strong>Three Awards:</strong> Outstanding / Excellent / Best</p>

      <h3>Eligibility Criteria:</h3>
      <ul>
        <li>The applicant must be a full-time employee or student at a School, Senior College, Higher Education Institute, or University.</li>
        <li>The applicant must have a distinct research contribution in the respective domain.</li>
        <li>He / She must have a minimum of 3 years of research-related experience in the respective domain.</li>
        <li>The age of the applicant should not be more than 35 years.</li>
      </ul>

      <div className="navigation-links">
        <Link to="/awards/sr-researcher-award">← Previous post: Sir Vishweshwaraiah PERA Sr Researcher Award</Link>
        <Link to="/awards/sr-researcher-award">Next post: Sir Vishweshwaraiah PERA Sr Researcher Award →</Link>
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

export default JrResearcherAward;
