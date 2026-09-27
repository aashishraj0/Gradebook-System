import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-container">
      <div id="logo1">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="header-title">Grade Book</div>
      </div>
      
        <div className="header-heading-main">Examination Management System</div><br/>
        <div className="header-info">
          <div className="header-item">
            <span className="header-heading">Title:</span> Engineering Exam
          </div>
          <div className="header-item">
            <span className="header-heading">Date:</span> 21st August
          </div>
          <div className="header-item">
            <span className="header-heading">Professor's Name:</span> Dr. Aasif Khan
          </div>
          <div className="header-item">
            <span className="header-heading">College:</span> LA College
          </div>
          <div className="header-item">
            <span className="header-heading">Department:</span> CSE
          </div>
          <div className="header-item">
            <span className="header-heading">Semester:</span> 7th
          </div>
        </div>
      </div>
    </header>
  );
}
