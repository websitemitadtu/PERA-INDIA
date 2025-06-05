import React from 'react';
import '../assets/styles/Awards.css';

const Jr_ResearcherAward = () => {
  return (
    <div className="award-detail">
      <h2>PERA Jr Researcher Award</h2>
      <p><strong>Three Awards:</strong> Outstanding / Excellent / Best</p>
      <h4>Eligibility Criteria:</h4>
      <ul>
        <li>Must be a full-time employee or student at School, Senior College, Higher Education Institute or University.</li>
        <li>Distinct research contribution in the respective domain.</li>
        <li>Minimum 3 years of research-related experience in the respective domain.</li>
        <li>Applicant age must not be more than 35 years.</li>
      </ul>
      <div className="comment-section">
        <h4>Leave a Reply</h4>
        <form>
          <textarea placeholder="Comment *" required></textarea>
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="url" placeholder="Website" />
          <label><input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.</label>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Jr_ResearcherAward;