import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Scholership.css'; // Make sure this is the correct path

const MashelkarScholarshipDetail = () => {
  return (
    <div className="scholarship-detail">
      <h2>Dr. Raghunath Mashelkar PERA Genius National Scholarship</h2>
      <div className="scholarship-body">
        <p>The students studying or passed in class 11th or 12th or Diploma and wishing to pursue higher education in the field of science &amp; technology/ engineering can apply for this scholarship.</p>
        <p>The age of the applicant should not be more than 19 years. The students who are pursuing open school should be less than 20 years of age.</p>
        <p>The applicant must score at least 75% marks in the respective examination or any previous class examination.</p>
        <p>The family annual income of the candidate should not be more than ₹5 Lakhs.</p>
      </div>

      <div className="navigation-links">
        <Link to="/scholarships/vijay-bhatkar-scholarship">← Dr. Vijay Bhatkar PERA Aspire National Scholarship</Link>
        <Link to="/scholarships/apj-abdul-kalam-scholarship">Dr. APJ Abdul Kalam PERA INDIGENT National Scholarship →</Link>
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

export default MashelkarScholarshipDetail;
