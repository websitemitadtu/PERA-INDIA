import React from 'react';
import '../assets/styles/PeraCetResult.css'; // Create this CSS file

import img from "../assets/Overview_page_img.jpg";
const PeraCetResult = () => {
  return (
    <div className="pera-result-container">
      <img
        src={img} 
        alt="PERA CET Result Banner"
        className="pera-result-banner"
      />

      <h2>PERA CET 2025 Result</h2>
      <p className="result-date">
        <strong>Note:</strong> PERA CET-2025 Result Date: <strong>31st May 2025</strong>, Time: <strong>05.00 PM onward</strong>.
      </p>

      <div className="pera-section">
        <h3>Steps to Download Score Card (Option 1)</h3>
        <ul>
          <li>Go to: <a href="https://peracet.formsubmit.in" target="_blank" rel="noopener noreferrer">https://peracet.formsubmit.in</a></li>
          <li><strong>Username:</strong> Your registered e-mail ID</li>
          <li><strong>Password:</strong> Your registered mobile number</li>
          <li>Click on: <strong>View</strong> option</li>
        </ul>
      </div>

      <div className="pera-section">
        <h3>Steps to Download Score Card (Option 2)</h3>
        <ul>
          <li>Go to: <a href="https://scorecards.peraindia.in" target="_blank" rel="noopener noreferrer">https://scorecards.peraindia.in</a></li>
          <li>Check your registered email ID for login credentials</li>
          <li><strong>Username:</strong> Your registered e-mail ID</li>
          <li><strong>Password:</strong> As provided in your email</li>
          <li><strong>Scorecard Process:</strong> Download or view PDF result login guide</li>
          <li>
            Download Guidebook: <a href="/downloads/PERA_CET_2024_Scorecard_Download_Guidebook.pdf" target="_blank" rel="noopener noreferrer">
              PERA_CET_2024_Scorecard_Download_Guidebook.pdf
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PeraCetResult;
