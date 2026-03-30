// components/MarqueeSlider.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function MarqueeSlider({ images }: { images: any }) {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<any>(null);

  // Tạo 3 bản sao để đảm bảo hiệu ứng mượt
  const tripleImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  useEffect(() => {
    if (containerRef.current) {
      // Tính toán chiều rộng của 1 set ảnh (không phải 3 set)
      const singleSetWidth = containerRef.current.scrollWidth / 3;
      setWidth(singleSetWidth);
    }
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidde">
      <motion.div
        ref={containerRef}
        animate={{
          x: [0, -width], // Di chuyển đúng 1 set ảnh
        }}
        transition={{
          duration: 10, // Tốc độ di chuyển
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-6"
      >
        {tripleImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 group cursor-pointer">
            <div className="relative w-full lg:h-[90px] h-[80px] rounded-2xl overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
