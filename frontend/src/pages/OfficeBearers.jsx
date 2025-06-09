import React, { useState } from "react";
import "../assets/styles/OfficeBearers.css";

const officeBearers = [
  {
    src: "/assets/001.jpg",
   
  },
  {
    src: "/assets/002-copy.jpg",
    
  },
  {
    src: "/assets/3-1.jpg",
  
  },
  {
    src: "/assets/Anil-Kashyap.jpg",
   
  },
  {
    src: "/assets/Chitnis.jpg",
    
  },
  {
    src: "/assets/dr-prabhaat-ranjan.jpg",
   
  },
  {
    src: "/assets/Dr-Ravi-Joshi.jpg",
    
  },


 {
    src: "/assets/Mr.-Tarundeep-Singh-Anand.jpg",

  },
  {
    src: "/assets/Mr.-Amit-Nitinrao-Kolhe.png",
  },
  {
    src: "/assets/Indira_uni.png",
   
  },
  {
    src: "/assets/Dr.-Sanjeevan-Arsud.jpg",
    
  },
  {
    src: "/assets/Dr.Pillai.jpg",
  },
  {
    src: "/assets/Dr.-M_U-Kharat.png",
  },
  {
    src: "/assets/e-b-khedkar.jpg",
  },




   {
    src: "/assets/pera-1.png",

  },
  {
    src: "/assets/pera.png",
  },
  {
    src: "/assets/prof.-PAWAR.jpg",
   
  },
  {
    src: "/assets/rahul_karad.jpg",
    
  },
  {
    src: "/assets/Sanjay_Padode_EDITED.jpg",
  },
  {
    src: "/assets/vc-Gopalkrishna-Joshi-sir-photo.jpg",
  },
  {
    src: "/assets/WhatsApp_Image_2021-06-24_at_19.35.00.jpeg",
  },
];




const OfficeBearers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for your comment!");
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  return (
    <div className="office-bearers-page">
      <h1>Office Bearers</h1>
      <div className="bearers-grid">
        {officeBearers.map((bearer, index) => (
          <div key={index} className="bearer-card">
            <img src={bearer.src} alt={bearer.name} />
            <h3>{bearer.name}</h3>
            <p>{bearer.designation}</p>
          </div>
        ))}
      </div>

      {/* Leave a Reply Form */}
      <div className="reply-section">
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form className="reply-form" onSubmit={handleSubmit}>
          <textarea
            name="message"
            placeholder="Comment *"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
          />
          <div className="remember">
            <label>
              <input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default OfficeBearers;
