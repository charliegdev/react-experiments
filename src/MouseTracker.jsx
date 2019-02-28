import React, { useState } from 'react';

const MouseTracker = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = ({ clientX, clientY }) => {
    setX(clientX);
    setY(clientY);
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <h1>Move the mouse and see its coordinate!</h1>
      <p>The current mouse position is:</p>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  );
};

export default MouseTracker;
