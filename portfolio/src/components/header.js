import React from 'react';
import useGoogleAnalytics from '../utils/useGoogleAnalytics';

function Header() {
  useGoogleAnalytics();

  return (
    <div className="Header-wrapper">
      <div className="header-box">
        <h1 id="name">
          Alex <br /> Kemper
        </h1>
        <h1>Software Developer</h1>
        <p>Full Stack Web Apps</p>
      </div>
    </div>
  );
}

export default Header;
