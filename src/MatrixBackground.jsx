import React from 'react';
import './MatrixBackground.css'; // We will create this next

const MatrixBackground = () => {
  // We generate 500 characters to fill the screen grid
  // You can increase this number if you have a huge monitor
  const totalCells = 600; 
  
  const cells = Array.from({ length: totalCells }).map((_, i) => {
    // Randomly choose 0 or 1, or you can add other characters
    const char = Math.random() > 0.5 ? '1' : '0';
    return <span key={i}>{char}</span>;
  });

  return (
    <div className="matrix-wrapper">
      <div className="jp-matrix">
        {cells}
      </div>
    </div>
  );
};

export default MatrixBackground;