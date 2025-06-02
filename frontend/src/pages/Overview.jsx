import React from "react";
import img from "../assets/Overview_page_img.jpg";
import '../assets/styles/Overview.css'

const Overview = () => {
  return (
    <div className="overview-container">
      <img src={img} alt="Overview" className="responsive-image" />
      <div className="objectives-card">
        <h2>Objectives of PERA</h2>
        <p>
          Self-financed Universities in Maharashtra have formed an association and
          registered a company under Section 8 of the Companies Act 2013 in the
          name and style of <strong>“PREEMINENT EDUCATION AND RESEARCH ASSOCIATION” (PERA)</strong>, Pune
          for following objects:
        </p>
        <h3 className="heading">Objectives :-</h3>
        <ul>
          <li>
            To encourage, promote and facilitate higher education, research, and
            other extra-curricular & co-curricular activities to help overall
            conducive uplifting and progress of higher education.
          </li>
          <li>
            To inspire and indorse research & innovation for the advancement and
            dissemination of knowledge.
          </li>
          <li>
            To represent self-financed universities of Maharashtra at national level
            for resolving regulatory issues with State Government, UGC, MHRD, and
            other authorities.
          </li>
          <li>
            To undertake extension programs and outreach activities like Faculty
            Development Programs, seminars, and conferences.
          </li>
          <li>
            To collaborate with industry and act as a catalyst between academia and
            industry to meet educational excellence and accreditation needs (NAAC,
            NBA, NIRF, etc.).
          </li>
          <li>
            To hold examinations, award academic distinctions, and institute
            scholarships, fellowships, prizes, and medals.
          </li>
          <li>
            To represent in courts and legal forums to resolve various issues faced
            by self-financed universities and institutions.
          </li>
          <li>
            To conduct Common Entrance Tests (CETs) for UG/PG programs across
            self-financed universities in India as per legislative provisions and
            UGC guidelines.
          </li>
          <li>
            Conducting CETs collectively will help source a large number of
            candidates nationwide, benefiting all member universities.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
