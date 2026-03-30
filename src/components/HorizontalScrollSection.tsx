"use client";

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import sumenh1 from "@/assets/images/su-menh-1.png";
import sumenh2 from "@/assets/images/su-menh-2.png";
import sumenh3 from "@/assets/images/su-menh-3.png";
import sumenh4 from "@/assets/images/su-menh-1.png";

import bgSumenh from "@/assets/images/section-su-menh-item-1.webp";
import congdong from "@/assets/images/Su-menh-voi-cong-dong.webp";
import doitac from "@/assets/images/Su-menh-voi-doi-tac.webp";
import khachhang from "@/assets/images/Su-menh-voi-khach-hang.webp";

import bgsumenh from "@/assets/images/Frame 1410138819.png";

export default function MissionSection() {
  const containerRef = useRef(null);
  const [currentCountState, setCurrentCountState] = useState(1);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const itemCount = missionItems.length + 1;
  const viewedCount = useTransform(scrollYProgress, [0, 1], [0, itemCount]);

  useMotionValueEvent(viewedCount, "change", (latest) => {
    const newCount = Math.min(Math.floor(latest), itemCount);
    setCurrentCountState(newCount);

    // Cập nhật trực tiếp index ảnh mới
    const newImageIndex = newCount <= 1 ? 0 : newCount - 1;
    setCurrentImageIndex(newImageIndex);
  });

  const itemProgress = missionItems.map((_, index) => {
    const start = index / itemCount;
    const end = (index + 1) / itemCount;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  });

  return (
    <div
      id="mission-section"
      ref={containerRef}
      className="flex justify-center items-start gap-1 relative flex-col min-h-[100vh] py-[60px] md:py-[100px]"
    >
      <img src={bgsumenh.src} alt="" className="absolute top-0 left-0 w-50" />
      <img src={bgsumenh.src} alt="" className="absolute top-[20%] right-0 w-50 rotate-180" />
      <img
        src={bgsumenh.src}
        alt=""
        className="absolute -bottom-50 left-0 w-50"
      />
      <div className="flex md:flex-row md:flex-col flex-col-reverse justify-between items-start gap-10 w-full container">
        <div className="sticky hidden xl:block top-40 left-10 w-40 text-[var(--color-primary)] font-quicksand-bold">
          {currentCountState === 0
            ? "01"
            : (currentCountState + 1).toString().padStart(2, "0")}
          <span className="">/</span>
          {itemCount.toString().padStart(2, "0")}
        </div>
        <div className="flex flex-col gap-6 flex-1 xl:flex-2">
          {missionItems.map((item, index) => {
            const opacity = itemProgress[index];
            const y = useTransform(opacity, [0, 1], [40, 0]);

            return (
              <motion.div
                key={item.id}
                className="sm:h-[320px] flex justify-start items-center border md:border-none md:p-0 p-5 border-gray-200 rounded-xl"
                style={{
                  opacity,
                  y,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="relative">
                  <div className="mission-icon">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="absolute top-0 right-0 font-quicksand-bold text-gray-700 xl:hidden block">
                    0{index + 1} / 0{missionItems.length}
                  </div>
                  <div className="mission-content">
                    <h3 className="my-5 text-[#165BB8] text-2xl font-quicksand-bold ">
                      {item.title}
                    </h3>
                    <p className="font-quicksand-regular font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mission-image h-[400px]! block w-full rounded-xl overflow-hidden shadow-xl sticky top-0 md:top-40 left-10 flex-1 xl:flex-2 z-100 bg-white">
          <motion.img
            key={currentImageIndex}
            src={imagebg[currentImageIndex]?.img}
            alt=""
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 1, // Tăng từ 0.4 lên 0.8 giây
              ease: "easeInOut",
              opacity: { duration: 0.8 }, // Fade chậm hơn
              scale: { duration: 0.8 }, // Scale chậm hơn
            }}
          />
        </div>
      </div>
    </div>
  );
}

const imagebg = [
  {
    img: bgSumenh.src,
  },
  {
    img: khachhang.src,
  },
  {
    img: doitac.src,
  },
  {
    img: congdong.src,
  },
];

const missionItems = [
  {
    id: 1,
    image: sumenh1.src,
    title: "với cán bộ nhân viên",
    description:
      "Cảm thấy hòa hợp, gắn kết, được trân trọng, được tạo cơ hội để khám phá, phát triển, khẳng định giá trị bản thân.",
  },
  {
    id: 2,
    image: sumenh2.src,
    title: "với khách hàng",
    description:
      "Cung cấp các sản phẩm - dịch vụ chất lượng cao với trải nghiệm tốt nhất dành cho Khách hàng và mang đến tổng lợi ích ngày một lớn hơn.",
  },
  {
    id: 3,
    image: sumenh3.src,
    title: "với đối tác",
    description:
      "Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền vững và hướng tới những giá trị tốt đẹp.",
  },
  {
    id: 4,
    image: sumenh4.src,
    title: "với cộng đồng",
    description:
      "Hài hoà lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho các hoạt động hướng về cộng đồng.",
  },
];
