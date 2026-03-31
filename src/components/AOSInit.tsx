// components/AOSInit.tsx
'use client';

import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import CSS trực tiếp

export const AOSInit = () => {
  useEffect(() => {
    // Dynamic import AOS JS để tránh lỗi SSR
    const initAOS = async () => {
      const AOS = (await import('aos')).default;
      
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic',
        delay: 0,
        disable: false,
        startEvent: 'DOMContentLoaded',
        throttleDelay: 99,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
      
      console.log('✅ AOS initialized');
    };
    
    initAOS();
  }, []);
  
  return null;
};

export default AOSInit;