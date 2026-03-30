// 'use client';

// import { useEffect, useRef } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.css';

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const scrollInstance = useRef<any>(null);

//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const initScroll = () => {
//       // V5: Khởi tạo bằng cách truyền element vào constructor
//       scrollInstance.current = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         multiplier: 1,
//         smartphone: {
//           smooth: true,
//         },
//         tablet: {
//           smooth: true,
//         },
//       } as any); // Tạm thời dùng as any để tránh lỗi TS

//       // Lưu instance vào window global
//       if (typeof window !== 'undefined') {
//         (window as any).locomotiveScroll = scrollInstance.current;
//       }

//       // Lưu vào DOM element
//       if (scrollRef.current) {
//         (scrollRef.current as any).__locomotive = scrollInstance.current;
//       }
//     };

//     initScroll();

//     return () => {
//       if (scrollInstance.current) {
//         scrollInstance.current.destroy();
//         if (typeof window !== 'undefined') {
//           delete (window as any).locomotiveScroll;
//         }
//       }
//     };
//   }, []);

//   return (
//     <div data-scroll-container ref={scrollRef}>
//       {children}
//     </div>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstance = useRef<any>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const initScroll = () => {
      // Khởi tạo locomotive-scroll
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      } as any);

      // Lưu instance vào window global
      if (typeof window !== "undefined") {
        (window as any).locomotiveScroll = scrollInstance.current;
      }

      // Lưu vào DOM element
      if (scrollRef.current) {
        (scrollRef.current as any).__locomotive = scrollInstance.current;
      }

      // SCROLL LÊN ĐẦU TRANG KHI RELOAD
      // Dùng setTimeout để đảm bảo locomotive đã sẵn sàng
      setTimeout(() => {
        if (scrollInstance.current) {
          scrollInstance.current.scrollTo(0, {
            duration: 0, // Không có animation
            disableLerp: true,
          });
        }
        // Backup: scroll window
        window.scrollTo(0, 0);
      }, 100);
    };

    initScroll();

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        if (typeof window !== "undefined") {
          delete (window as any).locomotiveScroll;
        }
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
