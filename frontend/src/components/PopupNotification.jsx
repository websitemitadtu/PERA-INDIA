import React, { useState, useEffect } from 'react';
import '../assets/styles/PopupNotification.css';

const PopupNotification = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup on first load
    setShowPopup(true);

    // Reopen every 1 minute (60,000 ms)
    const interval = setInterval(() => {
      setShowPopup(true);
    }, 60000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="popup-close" onClick={() => setShowPopup(false)}>×</button>
        <h2>PERA CET 2025 Notification</h2>
        <p><strong>Dear Candidates,</strong></p>
        <p>
          The PERA office provides comprehensive support to all PERA CET registered candidates at no charge.
          For any inquiries, please contact us at <strong>9606064968</strong>.
        </p>
        <p className="important">
          <strong>Important:</strong> Beware of fraudulent agents. PERA provides all help free of cost
          <strong> (except CET application fees)</strong>.
        </p>
        <p>Thank you,<br /><strong>CEO, PERA, India</strong></p>
      </div>
    </div>
  );
};

export default PopupNotification;
