import React from 'react';
import '../assets/styles/EventSchedule.css';

const events = [
  { event: 'Archery (M/W)', contact: 'Mrs. Priyadarshani', mobile: '7769810518', date: '28th October 2023' },
  { event: 'Badminton (M/W)', contact: 'Mr. Sunil More', mobile: '9763398136', date: '27th October 2023' },
  { event: 'Basketball (M/W)', contact: 'Mr. Sunil More', mobile: '9763398136', date: '27th October 2023' },
  { event: 'Boxing (M/W)', contact: 'Mr. Manoj Pingale', mobile: '9960300738', date: '27th October 2023' },
  { event: 'Chess (M/W)', contact: 'Mr. Ashok Karad', mobile: '7517512227', date: '27th October 2023' },
  { event: 'Cricket (M)', contact: 'Mr. Mahesh Sawant', mobile: '9325132041', date: '23rd October 2023' },
  { event: 'Football (M/W)', contact: 'Mr. Baburao Desai', mobile: '9891741085', date: '25th October 2023' },
  { event: 'Kabaddi (M/W)', contact: 'Mrs. Kshipra Paithankar', mobile: '9623980934', date: '27th October 2023' },
  { event: 'Kho-kho (M/W)', contact: 'Mrs. Kshipra Paithankar', mobile: '9623980934', date: '27th October 2023' },
  { event: 'Rowing (M/W)', contact: 'Mr. Sandeep Bhapkar', mobile: '9822232577', date: '28th October 2023' },
  { event: 'Swimming (M/W)', contact: 'Mr. Prakash C', mobile: '7378970129', date: '28th October 2023' },
  { event: 'Table Tennis (M/W)', contact: 'Mrs. Rupali Pardeshi', mobile: '9923225251', date: '27th October 2023' },
  { event: 'Tennis (M/W)', contact: 'Mr. Siddharth Garg', mobile: '9762805787', date: '27th October 2023' },
  { event: 'Volleyball (M/W)', contact: 'Mrs. Priyanka Jadhav', mobile: '7045828177', date: '27th October 2023' },
  { event: 'Water Polo (M)', contact: 'Mrs. Nisha Bonde', mobile: '9766514149', date: '28th October 2023' },
];

const EventSchedule = () => {
  return (
    <div className="event-schedule-page">
      <h1>Event Schedule & Coordinators</h1>
      <div className="table-wrapper">
        <table className="event-table">
          <thead>
            <tr>
              <th>Event</th>
              <th>Contact Person</th>
              <th>Mobile No</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {events.map((e, index) => (
              <tr key={index}>
                <td>{e.event}</td>
                <td>{e.contact}</td>
                <td><a href={`tel:${e.mobile}`}>{e.mobile}</a></td>
                <td>{e.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventSchedule;
