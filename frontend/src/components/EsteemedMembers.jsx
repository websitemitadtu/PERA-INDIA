import React from "react";
import "../assets/styles/EsteemedMembers.css";

const universities = [
  { id: 1, name: "University A", img: "/assets/Esteemed_members/001-Logo-for-Website.jpg" },
  { id: 2, name: "University B", img: "/assets/Esteemed_members/SVKM.png"  },
  { id: 3, name: "University C", img: "/assets/Esteemed_members/1.png"  },
  { id: 4, name: "University D", img: "/assets/Esteemed_members/002-Logo-for-Website.jpg"  },
  { id: 5, name: "University E", img: "/assets/Esteemed_members/adypu-2.jpg"  },
  { id: 6, name: "University F", img: "/assets/Esteemed_members/Balaji-copy.jpg"  },
  { id: 7, name: "University G", img: "/assets/Esteemed_members/dy_logo.png"  },
  { id: 8, name: "University H", img: "/assets/Esteemed_members/dyp-agri-1.png"  },
];

const EsteemedMembers = () => {
  return (
    <div className="members-section">
      <h2 className="members-title">Esteemed Members</h2>
      <div className="marquee">
        <div className="marquee-content">
          {universities.concat(universities).map((univ, index) => (
            <div className="univ-card" key={index}>
              <img src={univ.img} alt={univ.name} className="univ-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EsteemedMembers;
