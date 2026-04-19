import React, { useEffect, useRef, useState } from 'react';

const FadeIn = ({ children, delay = 0, className = '', style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting);
      });
    }, { 
      threshold: 0.1, 
      rootMargin: "0px" 
    });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-wrapper ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
