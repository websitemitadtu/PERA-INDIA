import React from 'react';
import '../assets/styles/ScholarshipAndAwards.css';
import scholarshipImg from '../assets/PERA-Website-Banner-1.jpg'; // Replace with actual image path
import awardImg from '../assets/PERA-Website-Banner-2.jpg';           // Replace with actual image path

const ScholarshipAndAwards = () => {
  return (
    <div className="scholarship-awards-page">
      <h1>PERA Scholarships / Awards</h1>

      <section className="section">
        <h2>PERA Scholarships-2022</h2>
        <img src={scholarshipImg} alt="PERA Scholarships" className="section-image" />

        <h3>Selection Procedure for PERA Scholarship:</h3>
        <ul>
          <li>The students must fulfill all the eligibility criteria under PERA Scholarship.</li>
          <li>The complete selection process works according to the will of the organizer of the scholarship.</li>
          <li>The students who have excellent academic track records and overall educational accomplishments are given a preference.</li>
          <li>The educational qualifications include Percentage, CGPA and other such criteria.</li>
          <li>The students who perform brilliantly in standardized tests are offered this scholarship.</li>
          <li>While shortlisting the students for this scholarship the economic background of the students will be kept in mind.</li>
        </ul>

        <h3>Documents Required for PERA Scholarship:</h3>
        <ul>
          <li>Scanned copy of 10th class passed mark-sheet.</li>
          <li>Scanned copy of 10th class Transfer Certificate.</li>
          <li>Scanned copy of 11th class or last exam passed mark-sheet.</li>
          <li>Copy of Identity card issued by the school/College.</li>
          <li>Death Certificate of parents of the Candidate (in death cases only).</li>
          <li>Recommendation letter by the Head of Institute/ Head of Dept.</li>
          <li>The letter written by the Candidate on the justification for availing of scholarship in Less than 300 words.</li>
          <li>Scanned copy of Family Annual Income Certificate.</li>
        </ul>
      </section>

      <section className="section">
        <h2>PERA AWARDS-2022</h2>
        <img src={awardImg} alt="PERA Awards" className="section-image" />

        <h3>Selection Procedure for PERA Awards:</h3>
        <ul>
          <li>The applicant must fulfill all the eligibility criteria as specified for PERA Awards.</li>
          <li>The complete selection process works according to the will of the organizer of the PERA Awards.</li>
          <li>The applicant who has excellent academic track records and distinct work in the respective field of education/research/innovation are given a preference.</li>
          <li>While shortlisting the applicant for the respective awards the uniqueness in the work/research project will be kept in mind.</li>
        </ul>

        <h3>Documents Required for PERA Award nomination:</h3>
        <ul>
          <li>Scanned copies of UG/ PG/ PhD degree certificate and marks sheets.</li>
          <li>Copy of Identity card issued by the School/College/University etc.</li>
          <li>Appointment Letter or Appointment Order of employer.</li>
          <li>Recommendation letter by the Head of Institute/ Head of Dept.</li>
          <li>The detailed research project or work report written by the applicant on the justification for nomination of award (Maximum 10 pages report).</li>
          <li>Scanned copies of Patent / Copyright / any other recognition documents.</li>
        </ul>
      </section>
    </div>
  );
};

export default ScholarshipAndAwards;
