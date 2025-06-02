import React from "react";
import profileImg from "../assets/president-1.jpg";
import "../assets/styles/PresidentMessage.css";

const PresidentMessage = () => {
  return (
    <div className="president-container">
      <h2 className="section-title">President Message</h2>
      <div className="president-card">
        <div className="profile-section">
          <img src={profileImg} alt="Dr. Mangesh T. Karad" className="profile-img" />
          <div className="profile-info">
            <h3>Dr. Mangesh T. Karad</h3>
            <p>President, PERA</p>
          </div>
        </div>
        <div className="message-content">
          <p>
            I am delighted to inform all the members of the Universities and our key stakeholders about the formation of the Preeminent Education and Research Association (PERA).
          </p>
          <p>
            The constitution of PERA, as an esteemed federation of the State Private Universities in Maharashtra, is a step in the positive direction. PERA would be acting as a strong catalyst for all the Member Universities to encourage, facilitate, and promote higher education, research, as well as other activities pertaining to the growth of commerce, art, design, technology, sports, etc. The role of PERA will be quite significant in raising the bar of excellence and progress of higher education in India.
          </p>
          <p>
            PERA would be acting as a custodian of interest for the self-financed universities, at the all-India level, for addressing and resolving their various regulatory issues amicably in consultation with policy makers and regulators from the University Grants Commission (UGC), Ministry of HRD, and various state governments.
          </p>
          <p>
            PERA would also be making substantial contributions in the field of higher education by indulging in multifarious activities which include approaching industry for collaborative projects in education, as well as helping universities and institutions in getting accreditation, rankings, and ratings through various national and international agencies of repute.
          </p>
          <p>
            One of the major tasks to be undertaken by PERA is to conduct Common Entrance Tests (CETs) for various professional undergraduate and postgraduate degree programs for all self-financed universities at an all-India level.
          </p>
          <p>
            I am extremely optimistic that PERA is going to play a pivotal role in ensuring the exponential growth of higher education in India, and all the member universities will join hands together in accomplishing the stated goals and objectives of producing quality manpower, as desired by the industry and academia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;
