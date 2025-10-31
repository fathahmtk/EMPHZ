import { useState, useEffect, RefObject } from 'react';

export const useContainerQuery = (ref: RefObject<HTMLElement>): { width: number } => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(entries => {
      // We are only observing one element.
      if (entries[0]) {
        setWidth(entries[0].contentRect.width);
      }
    });

    // Set initial width
    setWidth(element.offsetWidth);
    
    observer.observe(element);

    return () => {
        observer.disconnect();
    };
  }, [ref]);

  return { width };
};
