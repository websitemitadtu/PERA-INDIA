import React from 'react';
import '../assets/styles/MembershipGuidelines.css';

const MembershipGuidelines = () => {
  return (
    <div className="guidelines-container">
      <h1>Guidelines to Become a Member of PERA</h1>

      <ol>
        <li>The institution must be established as per the State Private University Act of Maharashtra State.</li>
        <li>The university must submit the duly filled and signed membership form.</li>
        <li>The university must pay membership fees by Demand Draft of ₹3,00,000/- (Rupees Three Lakhs only) favouring <strong>PREEMINENT EDUCATION AND RESEARCH ASSOCIATION</strong> or through RTGS online payment to the PERA account.</li>
        <li>The university may pay the membership fees in two installments of ₹1,50,000/- at the time of membership application and the remaining fees by the commencement of the next financial year or before <strong>April 01, 2022</strong>.</li>
        <li>On successful submission of the Annexure 1 and payment of requisite membership fees, the University will be awarded the membership certificate by PERA.</li>
      </ol>

      <div className="account-details">
        <h2>PERA Account Details</h2>
        <p><strong>Account Name:</strong> PREEMINENT EDUCATION & RESEARCH ASSOCIATION</p>
        <p><strong>Bank Name:</strong> HDFC Bank</p>
        <p><strong>Type of Account:</strong> Current</p>
        <p><strong>Account Number:</strong> 50200026367246</p>
        <p><strong>Branch Address:</strong> Mayur Colony, Kothrud, Pune</p>
        <p><strong>IFSC Code:</strong> HDFC0000149</p>
        <p><strong>MICR Code:</strong> 411240009</p>
      </div>
    </div>
  );
};

export default MembershipGuidelines;
