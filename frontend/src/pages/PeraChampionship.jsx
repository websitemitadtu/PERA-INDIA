import React from 'react';
import '../assets/styles/PeraChampionship.css';

const PeraChampionship = () => {
  return (
    <div className="pera-champ-container">
      <h2 className="pera-title">PERA Premier Championship</h2>

      <div className="champ-card">
        <div className="champ-video-section">
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/Bd3-fv6ZvGc"
            title="PERA Championship"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="champ-details">
          <p><strong>Cricket Matches Start:</strong> 22nd Oct</p>
          <p><strong>Football Matches Start:</strong> 25th Oct</p>
          <a
            className="register-btn"
            href="https://www.townscript.com/e/pera-premier-championship-033102"
            target="_blank"
            rel="noreferrer"
          >
            Register Now
          </a>
        </div>
      </div>

      <div className="champ-description">
        <p>
          The Preeminent Education and Research Association (PERA) is proud to introduce the PERA Premier Championship, a flagship sporting event designed to celebrate athleticism, teamwork, and the spirit of competition among our esteemed member universities. This championship promises to be an unforgettable experience, serving as a platform for our academic institutions to showcase their talents and foster camaraderie.
        </p>
        <p><strong>Registration Starts:</strong> 05th Oct 2023 | <strong>Registration Ends:</strong> 21st Oct 2023</p>
      </div>

      <div className="champ-table">
        <h3>Registration Fees & Prizes</h3>
        <table>
          <thead>
            <tr>
              <th>Sports Events</th>
              <th>Entry Fees (INR)</th>
              <th>Winner (INR)</th>
              <th>Runners-Up (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Cricket (M)</td><td>4000/-</td><td>20,000/-</td><td>10,000/-</td></tr>
            <tr><td>Football (M/W)</td><td>4000/-</td><td>15,000/-</td><td>10,000/-</td></tr>
            <tr><td>Kabaddi (M)</td><td>1200/-</td><td>10,000/-</td><td>7,000/-</td></tr>
            <tr><td>Basketball (M/W)</td><td>1200/-</td><td>10,000/-</td><td>7,000/-</td></tr>
            <tr><td>Volleyball (M/W)</td><td>1200/-</td><td>10,000/-</td><td>7,000/-</td></tr>
            <tr><td>Badminton (M/W)</td><td>1200/-</td><td>5,000/-</td><td>3,000/-</td></tr>
            <tr><td>Table Tennis (M/W)</td><td>1000/-</td><td>5,000/-</td><td>3,000/-</td></tr>
            <tr><td>Tennis (M/W)</td><td>1000/-</td><td>5,000/-</td><td>3,000/-</td></tr>
            <tr><td>Water Polo (M)</td><td>1000/-</td><td>5,000/-</td><td>3,000/-</td></tr>
            <tr><td>Chess (M/W)</td><td>1000/-</td><td>5,000/-</td><td>3,000/-</td></tr>
            <tr><td>Swimming (M/W)</td><td>300/- Per event</td><td>3,000/-</td><td>2,000/-</td></tr>
            <tr><td>Relay</td><td>500/-</td><td>-</td><td>-</td></tr>
            <tr><td>Rowing (M/W)</td><td>300/- Per head</td><td>3,000/-</td><td>2,000/-</td></tr>
            <tr><td>Boxing (M/W)</td><td>300/- Per weight</td><td>3,000/-</td><td>2,000/-</td></tr>
            <tr><td>Archery (M/W)</td><td>500/- Per head</td><td>3,000/-</td><td>2,000/-</td></tr>
            <tr><td>Kho-Kho (M/W)</td><td>1200/-</td><td>15,000/-</td><td>10,000/-</td></tr>
            <tr><td>Athletics (M/W)</td><td>500/- Per event</td><td>3,000/-</td><td>2,000/-</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PeraChampionship;
