'use client'
import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@radix-ui/react-icons';

const jump = {
  opacity: 0,
    y: 10,
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity
    
  }
}

const Scroll_to_top = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button variants={jump}
      className={`fixed md:w-14 md:h-14 w-12 h-12 text-center flex items-center justify-center bottom-7 md:right-24 right-20 bg-sky-700 text-white p-0 rounded-full transition-opacity ${
        isVisible ? 'opacity-80' : 'opacity-0'
      }`}
        onClick={scrollToTop}
      >
        <ArrowUpIcon className='md:w-6 md:h-6'/>
    </button>
  );
};

export default Scroll_to_top
