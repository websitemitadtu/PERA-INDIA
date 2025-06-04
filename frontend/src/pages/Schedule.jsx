import React, { useState } from 'react';
import '../assets/styles/PeraCetSchedule.css';
import img from "../assets/Overview_page_img.jpg";

const Schedule = () => {
  const [showAdmitGuidelines, setShowAdmitGuidelines] = useState(false);
  const [showMockExam, setShowMockExam] = useState(false);
  const [showFinalExam, setShowFinalExam] = useState(false);

  return (
    <div className="schedule-container">
      <img
        src={img}
        alt="PERA CET 2025 Schedule Banner"
        className="schedule-banner"
      />

      <h2>Schedule for PERA CET-2025</h2>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Start Date</td>
            <td>01st Jan 2025</td>
          </tr>
          <tr>
            <td>Last Date</td>
            <td>18th May 2025</td>
          </tr>
          <tr>
            <td>Examination Date</td>
            <td>22nd, 23rd & 24th May 2025 and 27th May 2025</td>
          </tr>
          <tr>
            <td>Result Date</td>
            <td>31st May 2025</td>
          </tr>
        </tbody>
      </table>

      {/* e-Admit Card Guidelines */}
      <h3
        className="guidelines-heading"
        onClick={() => setShowAdmitGuidelines(!showAdmitGuidelines)}
      >
        PERA CET-2025 e-ADMIT CARD preparation guidelines (Start Date 10th May 2025)
      </h3>
      {showAdmitGuidelines && (
        <div className="guidelines-content">
          <p>Dear Candidate,</p>
          <p>Preeminent Education and Research Association, Pune, welcomes you for PERA CET-2025 Examination.</p>
          <p>To appear for the PERA CET -2025 Online Proctored examination at home, you are requested to make appropriate arrangements as specified below.</p>
          <ol>
            <li>A “Desktop PC or Laptop” with enabled Web Camera is required.</li>
            <li>It is necessary to have Windows OS, Latest Google Chrome Browser and Internet connection with good connectivity & speed.</li>
            <li>Do not give your exam on a smart mobile phone.</li>
            <li>Do not download your ADMIT CARD and RESULT on a smart mobile phone.</li>
          </ol>
          <h4>Steps to prepare and download e-Admit Card:</h4>
          <ol>
            <li>Enter the below URL (Start date: 10th May 2025)
              <ul>
                <li><a href="https://peracet.formsubmit.in" target="_blank" rel="noopener noreferrer">https://peracet.formsubmit.in</a></li>
                <li>Click on Login Button</li>
                <li>Username: Your registered e-mail id</li>
                <li>Password: Your registered mobile number</li>
              </ul>
            </li>
            <li>Upload Your Latest Photo (.jpg image less than 1Mb)</li>
            <li>Upload Your Signature (.jpg image less than 1Mb)</li>
            <li>Click on the SAVE button</li>
            <li>Download e-Admit Card for further verification</li>
          </ol>
          <p><strong>Note:</strong> It’s mandatory to upload Candidate Photograph and Candidate Signature to prepare the admit card.</p>
        </div>
      )}

      {/* Mock Exam Guidelines */}
      <h3
        className="guidelines-heading"
        onClick={() => setShowMockExam(!showMockExam)}
      >
        PERA CET - 2025 Mock Exam Guidelines and Schedule (Start Date 15th May 2025)
      </h3>
      {showMockExam && (
        <div className="guidelines-content">
          <p><strong>The Mock Exam URL Link is:</strong> <a href="https://peracet.unionline.in" target="_blank" rel="noopener noreferrer">https://peracet.unionline.in</a></p>
          <p><strong>The Username and Password</strong> is given in the ADMIT CARD.</p>
          <h4>Important Instructions (15th May 2025 to 21st May 2025):</h4>
          <ul>
            <li>Mock Exam is a mandatory facility provided to understand the operations/functioning of PERA CET Examination Software and Hardware; it will make yourself ready for the final exam.</li>
            <li>Mock exam will be conducted for 25 MCQ type questions for 30 min duration. (The questions may not be from your course or program.)</li>
            <li>There will be only one attempt to appear for the Mock exam.</li>
            <li>Scorecard for the Mock Exam will not be issued. (Candidates are requested to appear for the final exam without fail.)</li>
          </ul>
          <p>For any assistance, please feel free to contact us at <strong>9606046968</strong> during working hours (9:30 AM to 5:00 PM).</p>
        </div>
      )}

      {/* Final Exam Schedule */}
      <h3
        className="guidelines-heading"
        onClick={() => setShowFinalExam(!showFinalExam)}
      >
        PERA CET - 2025 Final Exam Schedule (Exam date and time are fixed and cannot be changed.)
      </h3>
      {showFinalExam && (
        <div className="guidelines-content">
          <p><strong>Note:</strong> Please read your admit card carefully for details regarding the exam date and time.</p>
          <p><strong>Download User Manual:</strong> PERA_CET_2025_User_Manual</p>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>22nd May 2025</td><td>11:30 AM to 01:30 PM</td><td>Education (B.Ed / BA BEd / BSc BEd / M.Ed)</td></tr>
              <tr><td>23rd May 2025</td><td>11:30 AM to 01:30 PM</td><td>Engineering (M. Tech) – All Specializations</td></tr>
              <tr><td>24th May 2025</td><td>11:30 AM to 01:30 PM</td><td>Engineering (B. Tech)</td></tr>
              <tr><td>27th May 2025</td><td>11:30 AM to 01:30 PM</td><td>Law (LLB/ BBA-LLB/ BA-LLB/ LLM), Bioengineering, Fine Arts, Food Tech, Design, Pharmacy, Management, Architecture</td></tr>
              <tr><td>31st May 2025</td><td>05:00 PM Onwards</td><td>Result Day</td></tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Schedule;
