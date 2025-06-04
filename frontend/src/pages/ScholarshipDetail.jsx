import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/styles/Scholership.css';

const scholarshipDetails = {
  "apj-abdul-kalam-scholarship": {
    title: "Dr. APJ Abdul Kalam PERA INDIGENT National Scholarship",
    content: [
      "The students studying or passed in class 10th and wishing to pursue higher education in any field can apply for this scholarship.",
      "The age of the applicant should not be more than 17 years. The students who are pursuing open school should be less than 18 years of age.",
      "The applicant must score at least 75% marks in the respective examination or any previous class examination.",
      "The family annual income of the candidate should not be more than ₹5 Lakhs."
    ],
    previous: "/scholarships/raghunath-mashelkar-scholarship",
    next: "/awards/savitribai-phule-teacher-award"
  },
  
};

const ScholarshipDetail = () => {
  const { slug } = useParams();
  const data = scholarshipDetails[slug];
  if (!data) return <p>Scholarship not found.</p>;

  return (
    <div className="scholarship-detail">
      <h2 style={{padding : "15px"}}>{data.title}</h2>
      <div className="scholarship-body">
        {data.content.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
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

export default ScholarshipDetail;
