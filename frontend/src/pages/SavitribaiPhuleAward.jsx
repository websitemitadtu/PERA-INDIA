import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AwardDetail.css'; // Use the same shared CSS

const SavitribaiPhuleAward = () => {
  return (
    <div className="scholarship-detail">
      <h2>Smt. Savitribai Phule PERA Teacher Award</h2>
      <p><strong>Three Awards:</strong> Adhyapak / Upadhyaya / Acharya</p>

      <h3>Eligibility Criteria:</h3>
      <ul>
        <li>The applicant must be a full-time teacher for the classes of 8th Std to 12th Std (any board teachers can apply).</li>
        <li>He / She must have a minimum of 5 years of teaching experience.</li>
      </ul>

      <div className="navigation-links">
        <Link to="/awards/sr-researcher-award">← Previous post: Sir Vishweshwaraiah PERA Sr Researcher Award</Link>
        <Link to="/awards/swami-vivekanand-teacher-award">Next post: Swami Vivekanand PERA Teacher Award →</Link>
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

export default SavitribaiPhuleAward;
