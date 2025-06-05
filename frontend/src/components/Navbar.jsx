import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation added
import '../assets/styles/Navbar.css';
import logo from '../assets/Pera_India_logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef();
  const location = useLocation(); // 👈 track current route

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menuName) =>
    setDropdownOpen(dropdownOpen === menuName ? null : menuName);

  // 👇 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 👇 Close dropdown and menu on route change
  useEffect(() => {
    setDropdownOpen(null);
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="PERA Logo" />
        </Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>☰</button>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`} ref={dropdownRef}>
        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown('about')}>About PERA ▼</button>
          {dropdownOpen === 'about' && (
            <ul className="dropdown-menu">
              <li><Link to="/overview">Overview</Link></li>
              <li><Link to="/president-message">President Message</Link></li>
              <li><Link to="/vice-president-message">Vice President Message</Link></li>
              <li><Link to="/office-bearers">Office Bearers</Link></li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown('academics')}>Academics ▼</button>
          {dropdownOpen === 'academics' && (
            <ul className="dropdown-menu">
              <li><a href="https://college1.example.com" target="_blank" rel="noreferrer">College 1</a></li>
              <li><a href="https://college2.example.com" target="_blank" rel="noreferrer">College 2</a></li>
              <li><a href="https://college3.example.com" target="_blank" rel="noreferrer">College 3</a></li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown('pera-cet')}>PERA CET ▼</button>
          {dropdownOpen === 'pera-cet' && (
            <ul className="dropdown-menu">
              <li><Link to="/why-pera-cet">Why PERA CET</Link></li>
              <li><Link to="/guidelines">PERA CET Guidelines</Link></li>
              <li><Link to="/application-form">Online Application Form</Link></li>
              <li><Link to="/schedule">PERA CET 2025 Schedule</Link></li>
              <li><Link to="/result">PERA CET 2025 Result</Link></li>
            </ul>
          )}
        </li>

        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown('awards')}>PERA Scholarships/Award ▼</button>
          {dropdownOpen === 'awards' && (
            <ul className="dropdown-menu">
              <li><Link to="/scholarship-awards-2022">PERA Scholarships & Awards 2022</Link></li>
              <li><Link to="/scholarships">PERA Scholarships</Link></li>
              <li><Link to="/teacher-awards">PERA Teacher Awards</Link></li>
              <li><Link to="/researcher-awards">PERA Researcher Awards</Link></li>
            </ul>
          )}
        </li>



        <li className="nav-item dropdown">
          <button onClick={() => toggleDropdown('championships')}>PERA Championships ▼</button>
          {dropdownOpen === 'championships' && (
            <ul className="dropdown-menu">
              <li><Link to="/pera-premier-championship">PERA Premier Championship</Link></li> {/* ✅ NEW */}
              <li><Link to="/event-schedule">Event Schedule & Coordinators</Link></li>
              <li><Link to="/rules">Rules & Regulations</Link></li>
            </ul>
          )}
        </li>


        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
