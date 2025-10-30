import { useState, useEffect, RefObject } from 'react';

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * A custom hook that tracks the intersection of a DOM element with the viewport.
 * @param ref A React ref attached to the element to observe.
 * @param options Intersection Observer options (threshold, rootMargin, etc.).
 * @returns A boolean indicating whether the element is currently intersecting.
 */
const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We only want to trigger this once
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      options
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
