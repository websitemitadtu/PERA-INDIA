// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './Routes';
import Footer from './components/Footer';
import PopupNotification from './components/PopupNotification';

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <PopupNotification />
        <AppLayout />
      </Router>
    </React.StrictMode>
  );
};

export default App;
