"use client";

import Icon from "@/assets";
import bg from "@/assets/images/section-su-menh-item-1.webp";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "Wealth Management",
    color: "bg-white",
    textColor: "text-blue-600",
    showLearnMore: false,
    angle: 85,
  },
  {
    id: 2,
    title: "Training",
    color: "bg-[#2E2B72]",
    textColor: "text-white",
    showLearnMore: false,
    angle: 115,
  },
  {
    id: 3,
    title: "Hospitality",
    color: "bg-white",
    textColor: "text-blue-600",
    showLearnMore: false,
    angle: 145,
  },
  {
    id: 4,
    title: "Consulting",
    color: "bg-white",
    textColor: "text-blue-600",
    showLearnMore: false,
    angle: 175,
  },
  {
    id: 5,
    title: "Consulting",
    color: "bg-white",
    textColor: "text-blue-600",
    showLearnMore: false,
    angle: 205,
  },
];

export default function Ecosystem() {
  const [windowSize, setWindowSize] = useState({
    width: 1200, // Giá trị mặc định cho server
    height: 800,
  });

  // Responsive sizes
  const getResponsiveSizes = () => {
    const width = windowSize.width;

    if (width < 640) {
      // mobile
      return {
        bigSize: 320,
        orbitRadius: 140,
        itemSize: 70,
        innerPadding: 3,
        buttonSize: "text-xs px-4 py-2",
        titleSize: "text-2xl",
        subtitleSize: "text-base",
        descriptionSize: "text-[10px]",
      };
    } else if (width < 1024) {
      // tablet nhỏ
      return {
        bigSize: 450,
        orbitRadius: 210,
        itemSize: 100,
        innerPadding: 4,
        buttonSize: "text-sm px-5 py-2.5",
        titleSize: "text-3xl",
        subtitleSize: "text-lg",
        descriptionSize: "text-xs",
      };
    } else {
      // desktop
      return {
        bigSize: 700,
        orbitRadius: 350,
        itemSize: 150,
        innerPadding: 5,
        buttonSize: "text-sm px-6 py-3",
        titleSize: "text-5xl",
        subtitleSize: "text-xl",
        descriptionSize: "text-sm",
      };
    }
  };

  const sizes = getResponsiveSizes();
  const bigSize = sizes.bigSize;
  const orbitRadius = sizes.orbitRadius;

  const getPosition = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const centerX = bigSize / 2;
    const centerY = bigSize / 2;
    const x = centerX + orbitRadius * Math.cos(rad);
    const y = centerY + orbitRadius * Math.sin(rad);
    return { x, y };
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="md:hidden block">
        <img
          src={bg.src}
          alt=""
          className="w-[650px] h-[650px] rounded-full max-w-[650px]! absolute bottom-0 left-1/2 -translate-x-1/2"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-gradient-to-b from-[#2F2E7933] to-[#7E0044E5] opacity-60"></div>

        <div className="absolute bottom-[38%] left-1/2 -translate-x-1/2 flex justify-center items-center flex-wrap w-full">
          {items.map((item, idx) => {
            return (
              <div
                className="w-1/3 flex justify-center items-center"
                key={item.id}
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-delay={(idx + 1) * 100}
              >
                <div
                  className={`w-[120px] h-[120px] rounded-full shadow-sm shadow-[#0000001A] ${item.color} shadow-xl flex flex-col items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-105`}
                >
                  <div
                    className={`text-[8px] sm:text-[10px] font-medium ${
                      item.color.includes("#2E2B72")
                        ? "text-white"
                        : "text-[#2E2B72]"
                    }`}
                  >
                    <Icon name="icon-logo" className="w-20" />
                  </div>

                  <h3
                    className={`text-[9px] sm:text-[11px] text-center min-w-[70px] sm:min-w-[100px] pt-2 font-semibold leading-tight ${
                      item.color.includes("#2E2B72")
                        ? "text-white"
                        : "text-[#2E2B72]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="absolute bottom-[6%] left-1/2 -translate-x-1/2 text-white text-center font-quicksand-bold w-full px-5"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <div className="text-lg font-semibold">Ami&M Investment</div>
          <div className="text-xl">
            Quản lý & Khai thác Tài sản, Chuỗi cơ sở lưu trú.
          </div>
          <button
            className={`mt-4 sm:mt-8 inline-flex items-center gap-2 border border-white/70 rounded-full ${sizes.buttonSize} hover:bg-white hover:text-[#4A2E77] transition-all duration-300`}
          >
            Tìm hiểu thêm
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      <main className="items-center justify-center p-4 absolute -top-[10%] -right-[10%] md:flex hidden">
        <section
          className="relative flex items-center justify-center"
          style={{
            width: `${bigSize}px`,
            height: `${bigSize}px`,
          }}
        >
          <div
            className="relative rounded-full shadow-2xl"
            style={{
              width: `${bigSize}px`,
              height: `${bigSize}px`,
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#328AE2] to-[#FF0D39]"></div>

            <div
              className="absolute rounded-full"
              style={{
                top: `${sizes.innerPadding}px`,
                left: `${sizes.innerPadding}px`,
                right: `${sizes.innerPadding}px`,
                bottom: `${sizes.innerPadding}px`,
                backgroundImage:
                  "linear-gradient(rgba(66, 39, 116, 0.72), rgba(66, 39, 116, 0.72)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "inherit",
              }}
            />

            {/* content giữa */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
            >
              <div className="mb-2 sm:mb-3">
                <h2 className={`${sizes.titleSize} font-bold tracking-wide`}>
                  Ami&M
                </h2>
                <p className={`${sizes.subtitleSize} font-medium mt-1`}>
                  Training
                </p>
              </div>

              <p
                className={`${sizes.descriptionSize} leading-5 sm:leading-7 max-w-[280px] sm:max-w-[340px] font-medium uppercase`}
              >
                CUNG CẤP DỊCH VỤ
                <br />
                QUẢN LÝ & KHAI THÁC TÀI SẢN,
                <br />
                CHUỖI CƠ SỞ LƯU TRÚ.
              </p>

              <button
                className={`mt-4 sm:mt-8 inline-flex items-center gap-2 border border-white/70 rounded-full ${sizes.buttonSize} hover:bg-white hover:text-[#4A2E77] transition-all duration-300`}
              >
                Tìm hiểu thêm
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* ITEM CON BÁM THEO CUNG */}
            {items.map((item, idx) => {
              const pos = getPosition(item.angle);

              return (
                <div
                  key={item.id}
                  className="absolute z-20"
                  style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  data-aos="fade-left"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay={(idx + 1) * 100}
                >
                  <div
                    className={`rounded-full ${item.color} shadow-xl flex flex-col items-center justify-center p-2 sm:p-3 transition-all duration-300 hover:scale-105`}
                    style={{
                      width: `${sizes.itemSize}px`,
                      height: `${sizes.itemSize}px`,
                    }}
                  >
                    <div
                      className={`text-[8px] sm:text-[10px] font-medium ${
                        item.color.includes("#2E2B72")
                          ? "text-white"
                          : "text-[#2E2B72]"
                      }`}
                    >
                      <Icon name="icon-logo" className="w-22" />
                    </div>

                    <h3
                      className={`text-[9px] sm:text-[11px] text-center min-w-[70px] sm:min-w-[100px] font-semibold leading-tight mt-1 ${
                        item.color.includes("#2E2B72")
                          ? "text-white"
                          : "text-[#2E2B72]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
