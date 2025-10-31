import { useState, useEffect } from 'react';

// Throttles a function to limit how often it can be called.
const throttle = (func: () => void, limit: number) => {
  let inThrottle: boolean;
  return function() {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * A custom hook that tracks the window's vertical scroll position, throttled for performance.
 * @returns An object containing the current `scrollY` value.
 */
export const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Throttle the scroll handler to prevent performance issues.
    // 10ms is frequent enough for smooth parallax effects.
    const throttledHandleScroll = throttle(handleScroll, 10);

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Set initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return { scrollY };
};
