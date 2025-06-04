import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/AwardDetail.css';

const SwamiVivekanandAward = () => {
  return (
    <div className="award-detail">
      <h2>Swami Vivekanand PERA Teacher Award</h2>
      <p><strong>Three Awards:</strong> Pandit / Dhrishta / Guru</p>

      <div className="award-body">
        <h4>Eligibility Criteria:</h4>
        <ul>
          <li>The applicant must be a full-time teacher at a senior college, higher education institute, or university.</li>
          <li>He / She must have a minimum of 5 years of teaching experience.</li>
        </ul>
      </div>

      <div className="navigation-links">
        <Link to="/awards/savitribai-phule-teacher-award">← Previous post: Smt. Savitribai Phule PERA Teacher Award</Link>
        <Link to="/awards/empowering-private-universities">Next post: Empowering State Private Universities →</Link>
      </div>

      <div className="comment-section">
        <h4>Leave a Reply</h4>
        <form>
          <textarea placeholder="Comment *" required></textarea>
          <input type="text" placeholder="Name *" required />
          <input type="email" placeholder="Email *" required />
          <input type="url" placeholder="Website" />
          <label>
            <input type="checkbox" />
            Save my name, email, and website in this browser for the next time I comment.
          </label>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default SwamiVivekanandAward;
