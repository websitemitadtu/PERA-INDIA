import React from "react";
import cetImg from "../assets/why_pera.jpg"; // Replace with your actual image path
import "../assets/styles/PresidentMessage.css"; // Reuse your styles

const WhyPeraCET = () => {
  return (
    <>
      {/* Full-width responsive image */}
      <div className="office-image-wrapper">
        <img
          src={cetImg}
          alt="Why PERA CET"
          className="office-image-full"
        />
      </div>

      {/* Content section */}
      <div className="president-container">
        <h2 className="section-title">Why PERA CET</h2>

        <div className="president-card">
          <p style={{ textAlign: "justify", lineHeight: "1.7" }}>
            “Preeminent Education and Research Association, Pune (PERA) is an esteemed
            association of private universities in Maharashtra state.
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.7" }}>
            As per Maharashtra state University Act 2013; the admissions in the University
            shall be made strictly on the basis of merit. The merit for admission in the
            University may be determined, either on the basis of marks or grade obtained in
            the qualifying examination for admission and achievements in co-curricular and
            extra-curricular activities or on the basis of marks or grade obtained in the
            entrance test conducted at State level either by an association of the Universities
            conducting similar courses or by any agency of the State :
          </p>
          <p style={{ textAlign: "justify", lineHeight: "1.7" }}>
            Provided that, admission in professional and technical courses shall be made only
            through the entrance test.”
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyPeraCET;
