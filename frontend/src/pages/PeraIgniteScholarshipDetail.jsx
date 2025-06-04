import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Scholership.css';

const PeraIgniteScholarshipDetail = () => {
  return (
    <div className="scholarship-detail">
      <h2>PERA IGNITE Sports National Scholarship</h2>
      <div className="scholarship-body">
        <p>Age of applicant should be between 15 to 18 years to apply for this scholarship.</p>
        <p>The complete selection process works according to the will of the organizer of the scholarship.</p>
        <p>The students who have excellent academic track records and overall educational accomplishments are given a preference.</p>
        <p>The educational qualifications include Percentage, CGPA and other such criteria.</p>
        <p>The students who perform brilliantly in standardized tests are offered this scholarship.</p>
        <p>While shortlisting the students for this scholarship, the economic background of the students will be kept in mind.</p>
      </div>

      <div className="navigation-links">
        <span></span> {/* No previous link */}
        <Link to="/scholarships/vijay-bhatkar-scholarship">Dr. Vijay Bhatkar PERA Aspire National Scholarship →</Link>
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

export default PeraIgniteScholarshipDetail;
