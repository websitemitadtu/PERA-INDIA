import React from 'react';
import '../assets/styles/Banner.css';
import image from '../assets/PERA_ban.jpg';

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={image} alt="PERA Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
