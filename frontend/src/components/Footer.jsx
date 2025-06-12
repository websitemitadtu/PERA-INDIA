import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Footer.css'
import VisitorCounter from './VisitorCounter';
import { FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const footerLinks = [
  {
    category: 'Quick Links',
    links: [
      { name: 'Objectives of PERA', to: '/overview' },
      { name: 'PERA CET 2025 Schedule', to: '/schedule' },
      { name: 'PERA CET Result', to: '/result' },
      { name: 'Why PERA', to: '/why-pera' },
      { name: 'Contact Us', to: '/contact' },
      { name: 'NaConNEP', to: '/conference' },
      { name: 'PERA Membership', to: '/membership' },
      { name: 'Why PERA CET', to: '/why-pera-cet' },
      { name: 'Guidelines to Become Member of PERA', to: '/membership-guidelines' },
      { name: 'PERA Membership Form', to: 'https://www.peraindia.in/assets/upload/files/PERA_Membership_Form.pdf', external: true },

    ]
  },
  

  {
    category: 'Academics',
    links: [
      { name: 'Ajeenkya D.Y Patil University, Pune', to: 'https://adypu.edu.in' },
      { name: 'D Y Patil Inter. University, Pune', to: 'https://www.dypatil.edu' },
      { name: 'D Y Patil University, Pune, Ambi', to: 'https://www.dypatil.edu' },
      { name: 'MGM University, Aurangabad', to: 'https://mgmu.ac.in' },
      { name: 'Spicer Adventist University, Pune', to: 'https://sau.edu.in/' },
      { name: 'Sanjay Ghodawat University, Kolhapur', to: 'https://sgu.edu.in' },
      { name: 'Symbiosis Skills and Professional University, Pune', to: 'https://sspu.ac.in' },
      { name: 'Sandip University, Nashik', to: 'https://sandipuniversity.edu.in' },
      { name: 'Somaiya Vidyavihar University, Mumbai', to: 'https://svu.edu.in' },
      { name: 'Vijaybhoomi University, Greater Mumbai', to: 'https://vijaybhoomi.edu.in' },
      { name: 'Vishwakarma University, Pune', to: 'https://www.vupune.ac.in/' },
      { name: 'D Y Patil Agriculture and Technical University, Talsande', to: 'https://www.dyp-atu.org/' },
      { name: 'Sri Balaji University, Pune', to: 'https://www.sbup.edu.in/' },
      { name: 'NICMAR University, Pune', to: 'https://nicmar.ac.in' },
      { name: 'FLAME University, Pune', to: 'https://flame.edu.in' },
      { name: 'JSPM University, Pune', to: 'https://jspmuni.ac.in/' },
      { name: 'Dr. P.A Inamdar University, Pune', to: 'https://drpaiu.edu.in/' },
      { name: 'Pimpri Chinchwad University (PCU), Pune', to: 'https://pcu.edu.in/' },
      { name: 'Universal AI University, Karjat, Mumbai', to: 'https://www.universalai.in/#' },
      { name: 'DES Pune University, Pune', to: 'https://despu.edu.in/' },
      { name: 'G H Raisoni Inter.Skill Tech Uni, Pune', to: 'https://ghru.edu.in' },
      { name: 'MIT Vishwaprayag University, Solapur', to: 'https://www.mitvpu.ac.in/' },
      { name: 'Sanjivani University, Kopargaon', to: 'https://www.sanjivani.edu.in/' },
      { name: 'Dr. D. Y. Patil Dnyan Prasad University, Pune', to: 'https://dypdpu.edu.in' },
      { name: 'Indira University, Pune', to: 'https://indiraedu.com' },
      { name: 'SVKM NMIMS Global University, Dhule', to: 'https://nmims.edu' },
    ]
  }
];


const Footer = () => {
  const [visitorCount] = useState(1558855);
  const mid = Math.ceil(footerLinks[1].links.length / 2);

  const handleGoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-card">
        <div className="footer-top-row">
          <button className="go-top-btn" onClick={handleGoTop}>Go To Top</button>
          <div className="visitor-count"> <VisitorCounter /></div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3 style={{ color: "#ffffff" }}>{footerLinks[0].category}</h3>
            <ul>
              {footerLinks[0].links.map((link, i) => (
                <li key={i}><span className="arrow">→</span><Link to={link.to} className="footer-link">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h3 style={{ color: "#ffffff" }}>{footerLinks[1].category}</h3>
            <div className="academic-columns">
              <ul>
                {footerLinks[1].links.slice(0, mid).map((link, i) => (
                  <li key={i}><span className="arrow">→</span><a href={link.to} target="_blank" rel="noopener noreferrer" className="footer-link">{link.name}</a></li>
                ))}
              </ul>
              <ul>
                {footerLinks[1].links.slice(mid).map((link, i) => (
                  <li key={i}><span className="arrow">→</span><a href={link.to} target="_blank" rel="noopener noreferrer" className="footer-link">{link.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-follow">
          <h3 style={{ color: "#ffffff" }}>Follow Us</h3>
          <a style={{ fontSize: "25px" }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a style={{ fontSize: "25px" }} href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a style={{ fontSize: "25px" }} href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>

        <div className="bottom-links">
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <div className='copyright'>&copy; 2025 Preeminent Education and Research Association | Developed by Website Department</div>
      </div>
    </footer>
  );
};


export default Footer;
