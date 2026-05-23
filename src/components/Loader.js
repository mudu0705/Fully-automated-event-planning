import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-logo">
          <div className="loader-ring outer"></div>
          <div className="loader-ring middle"></div>
          <div className="loader-ring inner"></div>
          <div className="loader-icon">
            <i className="fas fa-bolt"></i>
          </div>
        </div>
        <div className="loader-brand">EventAI</div>
        <div className="loader-bar-wrap">
          <div className="loader-bar"></div>
        </div>
        <p className="loader-text">Initializing AI Engine...</p>
      </div>
    </div>
  );
}
