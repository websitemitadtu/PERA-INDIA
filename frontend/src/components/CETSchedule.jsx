import React from "react";
import '../assets/styles/CETSchedule.css'
import { FaArrowRight } from "react-icons/fa"; // FontAwesome arrow icon

const schedule = [
  {
    title: "Start Date",
    description: "01st Jan 2025",
    bgColor: "#1F2652",
    link: "https://peraindia.in/apply",
  },
  {
    title: "Last Date",
    description: "18th May 2025",
    bgColor: "#333B62",
    link: "https://peraindia.in/apply",
  },
  {
    title: "Examination Dates",
    description: "22nd, 23rd & 24th May 2025",
    bgColor: "#1F2652",
    link: "https://peraindia.in/apply",
  },
  {
    title: "Result Date",
    description: "31st May 2025",
    bgColor: "#333B62",
    link: "https://peraindia.in/apply",
  },
];

const CETSchedule = () => {
  return (
    <div className="cet-row">
      {schedule.map((item, index) => (
        <div
          className="cet-column"
          key={index}
          style={{ backgroundColor: item.bgColor }}
        >
          <div className="cet-tag" />
          <h3 className="cet-title">{item.title}</h3>
          <p className="cet-subtitle">PERA CET 2025</p>
          <p className="cet-date">{item.description}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cet-button"
          >
            Apply Now <FaArrowRight style={{ marginLeft: "8px" }} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default CETSchedule;
