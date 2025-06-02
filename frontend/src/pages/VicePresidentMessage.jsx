import React from "react";
import profileImg from "../assets/vice-president.jpg"; // Replace with your actual image file
import "../assets/styles/PresidentMessage.css"; // Reusing the same CSS as president

const VicePresidentMessage = () => {
  return (
    <div className="president-container">
      <h2 className="section-title">Vice President Message</h2>
      <div className="president-card">
        <div className="profile-section">
          <img src={profileImg} alt="Mr. Bharat Agrawal" className="profile-img" />
          <div className="profile-info">
            <h3>Mr. Bharat Agrawal</h3>
            <p>Vice President, PERA</p>
          </div>
        </div>
        <div className="message-content">
          <p>
            PERA has been established as an association of private universities,
            largely from the state of Maharashtra, but also from other parts of our country.
          </p>
          <p>
            The objective of every private university is primarily the interest of students.
            We understand the national goals of improving the gross enrolment ratio in our country,
            improving Quality of Education, Increase in Research and Innovations etc.
          </p>
          <p>
            We aspire most students to join higher education, learn skills, learn knowledge,
            do research, and finally develop their careers and lives. For doing so, the private
            universities have to play an important role as good as the government and the state universities.
          </p>
          <p>
            The objective of PERA is primarily to foster collaborations between all Private Universities
            so as to talk about the general interest of all the students, the interest of the teachers,
            the higher objectives of research and innovation and improving Industry Academia connects.
          </p>
          <p>
            I am sure the members of PERA would work cohesively in the interest of the national agenda
            and in the interest of our students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VicePresidentMessage;
