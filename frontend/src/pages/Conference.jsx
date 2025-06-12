import React from 'react';
import bannerImg from '../assets/pera_nano.jpg';
import "../assets/styles/Conference.css"; // Make sure this file exists

const Conference = () => {
  return (
    <div className="national-conference-container">
      
    

      {/* Main Content */}
      <div className="main-content">
        <img src={bannerImg} alt="Banner" className="banner-image" />


          {/* Sidebar */}
      <aside className="sidebar-nav">
        <h3>National Conference</h3>
        <ul>
          <li><a href="#about">About National Conference</a></li>
          <li><a href="#discussion">Panel Discussion Topics</a></li>
          <li><a href="#registration">Registration Link</a></li>
          <li><a href="#fees">Registration Fees</a></li>
          <li><a href="#dates">Important Dates</a></li>
          <li><a href="#profile">Participating Profile</a></li>
          <li><a href="#organizations">Participating Organizations</a></li>
          <li><a href="#contact">Contact Details</a></li>
        </ul>
      </aside>

        <section id="about" className="section">
          <h2>About National Conference</h2>
          <p>
            NEP-2020 offers an opportunity to rethink, reimagine and reinvent the education system...
            {/* Replace with full paragraph from the image as needed */}
          </p>
        </section>

        <section id="discussion" className="panel-discussion">
          <h2>Panel Discussion on</h2>
          <ul>
            <li><strong>11:30 am – 12:30 pm:</strong> NEP-2020 & Its impact on Professional Education.</li>
            <li><strong>1:30 pm – 2:30 pm:</strong> NEP-2020 - Opening new Pathway for Liberal Education and Interdisciplinary Approach.</li>
            <li><strong>3:00 pm – 4:00 pm:</strong> NEP-2020 - Fulfilling 21st Century needs through Vocational and Skill Education.</li>
          </ul>
        </section>

        <section className="registration-grid">
          <div id="registration">
            <h3>Registration Link</h3>
            <p><a href="https://bit.ly/NEP2020_Conference">https://bit.ly/NEP2020_Conference</a></p>
          </div>
          <div id="fees">
            <h3>Registration Fees</h3>
            <p>Conference Registration Fees: Rs. 2000/-</p>
          </div>
        </section>

        <section id="dates" className="registration-grid">
          <div>
            <h3>Last Date of Registration</h3>
            <p>25th March 2022</p>
          </div>
          <div>
            <h3>Date of Conference</h3>
            <p>30th March 2022</p>
          </div>
        </section>

        <section className="participating-section" id="profile">
          <div>
            <h3>Participating Profile</h3>
            <ul>
              <li>Government Officials</li>
              <li>Policy Makers & Think Tanks</li>
              <li>Educationists and Edupreneurs</li>
              <li>Corporate and Industry representatives</li>
              <li>Representatives from EdTech companies</li>
              <li>Education Service Providers</li>
            </ul>
          </div>
          <div id="organizations">
            <h3>Participating Organizations</h3>
            <ul>
              <li>State Universities / Deemed Universities / Private Universities</li>
              <li>Autonomous Institutions / Affiliated Higher Educational Institutions</li>
              <li>Colleges / Schools</li>
              <li>Non-Government Organizations</li>
              <li>Education Service Providers / EdTech Companies</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h3>Contact Persons</h3>
          <div className="contact-box">
            <div>
              <p><strong>Name:</strong> Prof. Hanumant Pawar</p>
              <p><strong>Phone:</strong> +91 9518723197</p>
            </div>
            <div>
              <p><strong>Name:</strong> Dr. Dnyaneshwar Magar</p>
              <p><strong>Phone:</strong> +91 8149690395</p>
            </div>
            <p><strong>Mail:</strong> <a href="mailto:ceo.pera@peraindia.in">ceo.pera@peraindia.in</a></p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Conference;
