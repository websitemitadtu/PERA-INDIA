import React from 'react';
import '../assets/styles/WhyPera.css';
import banner from '../assets/Overview_page_img.jpg'; // Make sure this path is correct

const WhyPera = () => {
  return (
    <div className="why-pera-container">
      <img className="why-pera-banner" src={banner} alt="Why PERA" />
      <div className="why-pera-card">
        <h2>Why PERA</h2>
        <p>
          The constitution of PERA, as an Esteemed Federation of the State Private Universities in Maharashtra, is a step in the positive direction. PERA acts as a strong catalyst for all the member universities to encourage, facilitate, and promote higher education, research, and activities related to the growth of commerce, art, design, technology, and sports.
        </p>
        <p>
          PERA plays a significant role in raising the bar of excellence and progress in higher education across India. It serves as a custodian of interests for self-financed universities nationwide, addressing regulatory issues in consultation with policy makers and regulators including the UGC, Ministry of HRD, and State Government.
        </p>
        <p>
          It contributes to higher education by engaging in diverse activities such as collaborating with industries, assisting in accreditation, rankings, and ratings via national and international agencies of repute.
        </p>
        <p>
          One of PERA's major tasks is to conduct Common Entrance Tests (CETs) for various professional undergraduate and postgraduate degree programs for all self-financed universities at the national level.
        </p>
      </div>
    </div>
  );
};

export default WhyPera;
