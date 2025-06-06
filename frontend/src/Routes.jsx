// src/Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import all your page components here
import Overview from './pages/Overview';
import PresidentMessage from './pages/PresidentMessage';
import VicePresidentMessage from './pages/VicePresidentMessage';
import OfficeBearers from './pages/OfficeBearers';
import Scholarships from './pages/Scholarships';
import ScholarshipDetail from './pages/ScholarshipDetail';
import WhyPeraCet from './pages/WhyPeraCET';
import Guidelines from './pages/Guidelines';
import ApplicationForm from './pages/ApplicationForm';
import Schedule from './pages/Schedule';
import Result from './pages/Result';
import TeacherAwards from './pages/TeacherAwards'
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

import Awards from './pages/TeacherAwards';
import AwardDetail from './pages/AwardDetail';
import MashelkarScholarshipDetail from './pages/MashelkarScholarshipDetail';

import BhatkarScholarshipDetail from './pages/BhatkarScholarshipDetail';
import PeraIgniteScholarshipDetail from './pages/PeraIgniteScholarshipDetail';
import SwamiVivekanandAward from './pages/SwamiVivekanandAward';
import SavitribaiPhuleAward from './pages/SavitribaiPhuleAward';
import JrResearcherAward from './pages/JrResearcherAward';
import SrResearcherAward from './pages/JrResearcherAward.jsx';


import SirVishweshwaraiahAward from './pages/SirVishweshwaraiahAward';
import Jr_ResearcherAward from './pages/Jr_ResearcherAward';
import SwamiVivekanandAwardReasercher from './pages/SwamiVivekanandAward';
import Savitribai_PhuleAward from './pages/Savitribai_PhuleAward.jsx';

import ScholarshipAndAwards from './pages/ScholarshipAndAwards';

import PeraChampionship from './pages/PeraChampionship';


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

      <Route path="/scholarships/:slug" element={<ScholarshipDetail />} />

      <Route path="/event-schedule" element={<EventSchedule />} />
      <Route path="/rules" element={<Rules />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/" element={<NewsAndBlogs />} />
      <Route path="/all-news" element={<AllNews />} />
      <Route path="/all-blogs" element={<AllBlogs />} />
      <Route path="/news/:id" element={<NewsDetail />} />
      <Route path="/blog/:id" element={<BlogDetail />} />

      <Route path="/awards" element={<Awards />} />
      <Route path="/awards_details" element={<AwardDetail />} />
      <Route path="/scholarships/raghunath-mashelkar-scholarship" element={<MashelkarScholarshipDetail />} />
      <Route path="/scholarships/vijay-bhatkar-scholarship" element={<BhatkarScholarshipDetail />} />
      <Route path="/scholarships/pera-ignite-sports-scholarship" element={<PeraIgniteScholarshipDetail />} />
      <Route path="/awards/swami-vivekanand-teacher-award" element={<SwamiVivekanandAward />} />
      <Route path="/awards/savitribai-phule-teacher-award" element={<SavitribaiPhuleAward />} />
      <Route path="/awards/jr-researcher-award" element={<JrResearcherAward />} />
      <Route path="/awards/sr-researcher-award" element={<SrResearcherAward />} />


      <Route path="/awards/sr-researcher-awards" element={<SirVishweshwaraiahAward />} />
      <Route path="/awards/jr-researcher-awards" element={<Jr_ResearcherAward />} />
      <Route path="/awards/swami-vivekanand-researcher-awards" element={<SwamiVivekanandAwardReasercher />} />
      <Route path="/awards/savitribai-phule-researcher-awards" element={<Savitribai_PhuleAward />} />
      <Route path="/awards" element={<ResearcherAwards />} />
      <Route path="/scholarship-awards-2022" element={<ScholarshipAndAwards />} />
      <Route path="/pera-premier-championship" element={<PeraChampionship />} />





    </Routes>
  );
};

export default AppRoutes;
