import React from 'react';
import '../assets/styles/Awards.css';

const SirVishweshwaraiahAward = () => {
  return (
    <div className="award-detail">
      <h2>Sir Vishweshwaraiah PERA Sr Researcher Award</h2>
      <p><strong>Three Awards:</strong> Diamond / Platinum / Gold</p>
      <h4>Eligibility Criteria:</h4>
      <ul>
        <li>Must be a full-time employee, student or research scholar at a Higher Education Institute, University, research organization or lab.</li>
        <li>Distinct research contribution in the respective domain.</li>
        <li>Minimum 3 years of research-related experience in the respective domain.</li>
        <li>Applicant must be older than 35 years.</li>
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

export default SirVishweshwaraiahAward;