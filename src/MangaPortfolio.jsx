import React from 'react';
import './MangaPortfolio.css';

const MangaPortfolio = () => {
  return (
    <div className="manga-container">
      {/* 1. Profile Panel */}
      <div className="panel area-profile">
        <h3>PILOT</h3>
        <p>Your Name</p>
        <small>Software Engineer // Lvl. 21</small>
      </div>

      {/* 2. Hero Section (Main Display) */}
      <div className="panel area-hero">
        <h1 style={{ fontSize: '3rem', fontFamily: 'Orbitron' }}>SYSTEM ONLINE</h1>
        <p>Initializing portfolio protocols...</p>
        <button className="cyber-btn">Start Mission</button>
      </div>

      {/* 3. Stats (Skills) */}
      <div className="panel area-stats">
        <h3>SYNC RATE</h3>
        <div>React: 90%</div>
        <div>Python: 85%</div>
      </div>

      {/* 4. Navigation */}
      <div className="panel area-nav">
        <ul>
          <li>01 // HOME</li>
          <li>02 // ABOUT</li>
          <li>03 // LOGS</li>
        </ul>
      </div>

      {/* 5. Status / Current Job */}
      <div className="panel area-status">
        <p>STATUS: <span style={{color: '#ff0055'}}>ACTIVE</span></p>
        <p>Looking for Internships</p>
      </div>

      {/* 6. Projects */}
      <div className="panel area-projects">
        <h3>DEPLOYED UNITS</h3>
        <div style={{ marginTop: '10px', borderTop: '1px dashed #00ffcc' }}>
           <p>Project A [GitHub]</p>
           <p>Project B [Live]</p>
        </div>
      </div>
    </div>
  );
};

export default MangaPortfolio;