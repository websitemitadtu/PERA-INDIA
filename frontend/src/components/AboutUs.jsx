import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/AboutUs.css";
import peraSteps from "../assets/pera_steps.png";

const AboutUs = () => {
  const [selected, setSelected] = useState(null);

  const officeBearers = [
    {
      src: "/assets/001.jpg",
      name: "Dr. A. B. Patil",
      designation: "President",
    },
    {
      src: "/assets/002-copy.jpg",
      name: "Prof. C. D. Kale",
      designation: "Vice President",
    },
    {
      src: "/assets/3-1.jpg",
      name: "Mr. E. F. Rao",
      designation: "Treasurer",
    },
    {
      src: "/assets/Anil-Kashyap.jpg",
      name: "Dr. Anil Kashyap",
      designation: "Executive Member",
    },
    {
      src: "/assets/Chitnis.jpg",
      name: "Prof. Chitnis",
      designation: "Executive Member",
    },
    {
      src: "/assets/dr-prabhaat-ranjan.jpg",
      name: "Dr. Prabhaat Ranjan",
      designation: "Executive Member",
    },
    {
      src: "/assets/Dr-Ravi-Joshi.jpg",
      name: "Dr. Ravi Joshi",
      designation: "Executive Member",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="about-wrapper">
      {/* About Us Top Card */}
      <div className="about-card">
        <div className="about-left">
          <h2>About PERA</h2>
          <p>
            Preeminent Education and Research Association (PERA) is an esteem federation of the state private universities of Maharashtra. The federation has been constituted to promote quality education in all the domains of professional programmes.
          </p>
          <a href="/about" className="read-more-btn">Read More</a>
        </div>
        <div className="about-right">
          <img src={peraSteps} alt="PERA Steps" />
        </div>
      </div>

      {/* Office Bearers Carousel */}
      <div className="office-bearers">
        <h2>Office Bearers</h2>
        <Slider {...settings}>
          {officeBearers.map((bearer, i) => (
            <div key={i} className="carousel-img-wrapper" onClick={() => setSelected(bearer)}>
              <div className="img-hover-container">
                <img src={bearer.src} alt={bearer.name} />
                <div className="overlay">
                  <h4>{bearer.name}</h4>
                  <p>{bearer.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.name} />
            <h3>{selected.name}</h3>
            <p>{selected.designation}</p>
            <button onClick={() => setSelected(null)} className="modal-close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
