// src/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all your page components here
import Overview from './pages/Overview';
import PresidentMessage from './pages/PresidentMessage';
import VicePresidentMessage from './pages/VicePresidentMessage';
import OfficeBearers from './pages/OfficeBearers';

import WhyPeraCet from './pages/WhyPeraCET';
import Guidelines from './pages/Guidelines';
import ApplicationForm from './pages/ApplicationForm';
import Schedule from './pages/Schedule';
import Result from './pages/Result';

import Scholarships from './pages/Scholarships';
import TeacherAwards from './pages/TeacherAwards';
import ResearcherAwards from './pages/ResearcherAwards';
import NewsAndBlogs from './components/NewsAndBlogs';
import AllNews from './pages/AllNews';
import AllBlogs from './pages/AllBlogs';
import NewsDetail from './pages/NewsDetail';
import BlogDetail from './pages/BlogDetail';
import EventSchedule from './pages/EventSchedule';
import Rules from './pages/Rules';
import Home from './pages/Home';
import Contact from './pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/president-message" element={<PresidentMessage />} />
      <Route path="/vice-president-message" element={<VicePresidentMessage />} />
      <Route path="/office-bearers" element={<OfficeBearers />} />

      <Route path="/why-pera-cet" element={<WhyPeraCet />} />
      <Route path="/guidelines" element={<Guidelines />} />
      <Route path="/application-form" element={<ApplicationForm />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/result" element={<Result />} />

      <Route path="/scholarships" element={<Scholarships />} />
      <Route path="/teacher-awards" element={<TeacherAwards />} />
      <Route path="/researcher-awards" element={<ResearcherAwards />} />

      <Route path="/event-schedule" element={<EventSchedule />} />
      <Route path="/rules" element={<Rules />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/" element={<NewsAndBlogs />} />
      <Route path="/all-news" element={<AllNews />} />
      <Route path="/all-blogs" element={<AllBlogs />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
};

export default AppRoutes;
