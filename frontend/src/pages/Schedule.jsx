import React from 'react';
import '../assets/styles/PeraCetSchedule.css'; // CSS file for styling
import img from "../assets/Overview_page_img.jpg"
const Schedule = () => {
  return (
    <div className="schedule-container">
      <img
        src={img} // Replace with your image path
        alt="PERA CET 2025 Schedule Banner"
        className="schedule-banner"
      />

      <h2>Schedule for PERA CET-2025</h2>

      <table className="schedule-table">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Start Date</td>
            <td>01st Jan 2025</td>
          </tr>
          <tr>
            <td>Last Date</td>
            <td>18th May 2025</td>
          </tr>
          <tr>
            <td>Examination Date</td>
            <td>22nd, 23rd & 24th May 2025 and 27th May 2025</td>
          </tr>
          <tr>
            <td>Result Date</td>
            <td>31st May 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
