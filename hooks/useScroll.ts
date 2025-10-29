import { useState, useEffect, useCallback } from 'react';

/**
 * A custom hook to track the window's scroll position.
 * @param threshold The scroll position (in pixels) at which `isScrolled` becomes true. Defaults to 10.
 * @returns An object containing the `isScrolled` boolean.
 */
export const useScroll = (threshold: number = 10) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > threshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Initial check in case the page loads already scrolled
    handleScroll(); 
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { isScrolled };
};
