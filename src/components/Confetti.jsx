import React, { useEffect } from 'react';
import ConfettiGenerator from 'confetti-js';

const Confetti = () => {
  useEffect(() => {
    const confettiSettings = {
      target: 'confetti-canvas',
      max: 10,
      size: 1,
      animate: true,
      respawn: true,
      props: ['', 'square', 'triangle'],
      colors: [
        [255, 0, 0],
        [0, 255, 0],
        [0, 0, 255],
        [0, 255, 255],
        [255, 0, 255],
        [255, 255, 0],
        [0, 0, 0],
        [255, 255, 255],
      ],
      clock: 25,
      rotate: true,
      start_from_edge: true,
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Clean up the confetti animation when the component is unmounted
    return () => confetti.clear();
  }, []);

  return (
    <canvas id="confetti-canvas"></canvas>
  );
};

export default Confetti;
