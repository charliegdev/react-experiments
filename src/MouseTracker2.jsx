import React, { useState } from 'react';
import Cat from './Cat';

const MouseWithCat = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = ({ clientX, clientY }) => {
    setX(clientX);
    setY(clientY);
  };

  // Instead of displaying an <h1 /> and <p />, just diplay this <Cat />.
  return (
    <div style={{ height: '100vh', width: '100vw' }} onMouseMove={handleMouseMove}>
      <Cat mouse={{ x, y }} />
    </div>
  );
};

export default MouseWithCat;
