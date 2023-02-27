import { useEffect, useState } from 'react';

/**
 * 浏览器分辨率变化
 * @returns
 */
const ChangeWinSize = () => {
  const getWindowSize = () => ({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  });
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const handleReSize = () => {
    setWindowSize(getWindowSize());
  };
  useEffect(() => {
    window.addEventListener('resize', handleReSize);
    return () => window.removeEventListener('resize', handleReSize);
  });

  return windowSize;
};

export default ChangeWinSize;
