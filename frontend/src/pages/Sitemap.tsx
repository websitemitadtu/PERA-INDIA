// src/components/Sitemap.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sitemap.css'; // Optional CSS for styling

const Sitemap = () => {
  const sections = [
    {
      title: 'About PERA',
      links: [
        { name: 'Overview', path: '/overview' },
        { name: 'President Message', path: '/president-message' },
        { name: 'Vice President Message', path: '/vice-president-message' },
        { name: 'Office Bearers', path: '/office-bearers' },
      ],
    },
    {
      title: 'PERA CET',
      links: [
        { name: 'Why PERA CET', path: '/why-pera-cet' },
        { name: 'Guidelines', path: '/guidelines' },
        { name: 'Application Form', path: '/application-form' },
        { name: 'Schedule', path: '/schedule' },
        { name: 'Result', path: '/result' },
      ],
    },
    {
      title: 'Scholarships & Awards',
      links: [
        { name: 'Scholarships', path: '/scholarships' },
        { name: 'Scholarship & Awards 2022', path: '/scholarship-awards-2022' },
        { name: 'Teacher Awards', path: '/teacher-awards' },
        { name: 'Researcher Awards', path: '/researcher-awards' },
        { name: 'Swami Vivekanand Award', path: '/awards/swami-vivekanand-teacher-award' },
        { name: 'Savitribai Phule Award', path: '/awards/savitribai-phule-teacher-award' },
      ],
    },
    {
      title: 'Events & News',
      links: [
        { name: 'Event Schedule', path: '/event-schedule' },
        { name: 'News & Blogs', path: '/all-news' },
        { name: 'All Blogs', path: '/all-blogs' },
        { name: 'PERA Premier Championship', path: '/pera-premier-championship' },
      ],
    },
    {
      title: 'More',
      links: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Rules', path: '/rules' },
        { name: 'Terms & Conditions', path: '/terms-and-conditions' },
      ],
    },
  ];

  return (
    <div className="sitemap-container">
      {sections.map((section, index) => (
        <div className="sitemap-section" key={index}>
          <h4>{section.title}</h4>
          <ul>
            {section.links.map((link, i) => (
              <li key={i}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sitemap;
