import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWindowDimensions(getWindowDimensions);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimensions.width <= 768;

  return { windowDimensions, isMobile };
};
