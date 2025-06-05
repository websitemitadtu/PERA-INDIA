import React from 'react';
import '../assets/styles/Contact.css';
import contactBanner from '../assets/Overview_page_img.jpg'; // Update path if needed

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Banner Image */}
            <div className="banner-container">
                <img src={contactBanner} alt="Contact Banner" className="banner-img" />
            </div>

            {/* Page Heading */}
            <h1 className="contact-heading">Contact Us</h1>

            {/* Contact Details Section */}
            <div className="contact-info">
                <div className="info-box">
                    <h3>Address</h3>
                    <p>Preeminent Education & Research Association,<br />
                        MIT-ADT University Sr No. 140,<br />
                        Loni – Kalbhor, Pune-412201</p>
                </div>

                <div className="info-box">
                    <h3>Email</h3>
                    <p><a href="mailto:info@peraindia.in">info@peraindia.in</a></p>
                </div>

                <div className="info-box">
                    <h3>PERA CET Enquiry No</h3>
                    <p><a href="tel:+919606046968">+91 9606046968</a></p>
                </div>

                <div className="info-box">
                    <h3>Contact Working Hours</h3>
                    <p>9:00 AM to 6:00 PM</p>
                </div>
            </div>

            
            
        </div>
    );
};

export default Contact;
