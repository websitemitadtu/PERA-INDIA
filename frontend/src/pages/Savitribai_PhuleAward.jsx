import React from 'react';
import '../assets/styles/Awards.css';

const Savitribai_PhuleAward = () => {
  return (
    <div className="award-detail">
      <h2>Smt. Savitribai Phule PERA Teacher Award</h2>
      <p><strong>Three Awards:</strong> Adhyapak / Upadhyaya / Acharya</p>
      <h4>Eligibility Criteria:</h4>
      <ul>
        <li>Must be a full-time teacher for classes 8th Std to 12th Std (teachers from any board can apply).</li>
        <li>Minimum 5 years of teaching experience.</li>
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

export default Savitribai_PhuleAward;