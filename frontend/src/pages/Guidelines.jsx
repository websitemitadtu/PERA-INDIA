import '../assets/styles/PeraCetGuidelines.css'; 
import img from "../assets/pera_cet_guidlines.jpg"
const Guidelines = () => {
  return (
    <div className="pera-guidelines-container">
      <img
        src={img}
        alt="PERA CET Banner"
        className="pera-banner"
      />

      <h2>PERA CET Guidelines</h2>
      <ul className="pera-guidelines-list">
        <li>PERA CET will be conducted only for professional programs.</li>
        <li>Additional to other entrance exams like JEE, MH-CET, Uni-Gauge, ATMA, CAT, MAT & others.</li>
        <li>Valid for 1st year admission in PERA Member Universities only.</li>
        <li>Apply online through <a href="https://www.peraindia.in" target="_blank" rel="noopener noreferrer">www.peraindia.in</a> only.</li>
        <li>Application fee is Rs. 1500/- (Online only). <strong>Note:</strong> Non-refundable.</li>
        <li>Online CBT conducted at designated centers.</li>
        <li>Option for Online Proctored Home-Based Test.</li>
        <li>Program-wise question papers. No answer keys/solutions will be shared.</li>
        <li>UG: Based on 12th syllabus. PG: Based on degree level syllabus.</li>
        <li><strong>No negative marking.</strong></li>
      </ul>

      <h3>Marking Scheme of PERA CET Examination</h3>
      <div className="pera-table-container">
        <table className="pera-table">
          <thead>
            <tr>
              <th>Program Name</th>
              <th>Marking Scheme</th>
              <th>Syllabus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                B. Tech (Engg branches), Bioengineering, Food Tech, B. Pharm
              </td>
              <td>
                Physics (25 x 2), Chemistry (25 x 2), Maths (50 x 2)<br />
                <strong>Total: 200 Marks | 2 hr</strong>
              </td>
              <td>12th Syllabus</td>
            </tr>
            <tr>
              <td>B. Tech Bioeng., Food Tech, B. Pharm (Biology)</td>
              <td>
                Physics (25 x 2), Chemistry (25 x 2), Biology (50 x 2)<br />
                <strong>Total: 200 Marks | 2 hr</strong>
              </td>
              <td>12th Syllabus</td>
            </tr>
            <tr>
              <td>B. Ed / BA-B.Ed / BSc-B.Ed</td>
              <td>150 MCQ x 1 mark<br /><strong>Total: 150 Marks | 2 hr</strong></td>
              <td>MH CET Syllabus</td>
            </tr>
            <tr>
              <td>M. Ed</td>
              <td>100 MCQ x 1 mark<br /><strong>Total: 100 Marks | 2 hr</strong></td>
              <td>Subject Specific</td>
            </tr>
            <tr>
              <td>BCA / BBA / BMS / BBM</td>
              <td>
                English (40), Reasoning (30), GK (15), Computer Basics (15)<br />
                <strong>Total: 100 Marks | 2 hr</strong>
              </td>
              <td>General</td>
            </tr>
            <tr>
              <td>BBA-LLB / BA-LLB / LLB / LLM</td>
              <td>100 MCQ x 2 marks<br /><strong>Total: 200 Marks | 2 hr</strong></td>
              <td>MH CET Syllabus</td>
            </tr>
            <tr>
              <td>BFA / B.Des / M.Des</td>
              <td><strong>Total: 100 Marks | 2 hr</strong></td>
              <td>MH CET Syllabus</td>
            </tr>
            <tr>
              <td>MBA</td>
              <td>100 MCQ x 2 marks<br /><strong>Total: 200 Marks | 2 hr</strong></td>
              <td>MH CET Syllabus</td>
            </tr>
            <tr>
              <td>MCA</td>
              <td>100 MCQ x 2 marks<br /><strong>Total: 200 Marks | 2 hr</strong></td>
              <td>MH CET Syllabus</td>
            </tr>
            <tr>
              <td>M. Pharm</td>
              <td>100 MCQ x 2 marks<br /><strong>Total: 200 Marks | 2 hr</strong></td>
              <td>GATE Syllabus</td>
            </tr>
            <tr>
              <td>M. Arch / M. Plan</td>
              <td>100 MCQ x 2 marks<br /><strong>Total: 200 Marks | 2 hr</strong></td>
              <td>MH CET Syllabus</td>
            </tr>
            <tr>
              <td>M. Tech (All branches)</td>
              <td>100 MCQ x 2 marks<br /><strong>Total: 200 Marks | 2 hr</strong></td>
              <td>GATE Syllabus</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Guidelines;
