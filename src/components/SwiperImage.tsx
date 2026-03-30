import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/scss/stylesSwiper.scss";
import Icon from "@/assets";
import { dataSwipperImage } from "@/data/swipperImage";
import { ArrowRight } from "lucide-react";

export default function SwiperImage() {
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);
  const swiperRef = useRef<any>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    // Đợi một chút để các ref được gán
    if (prevRef.current && nextRef.current && swiperRef.current?.swiper) {
      const swiper = swiperRef.current.swiper;
      if (
        swiper.params.navigation &&
        typeof swiper.params.navigation === "object"
      ) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
        setSwiperReady(true);
      }
    }
  }, []);

  return (
    <>
      <div className="relative h-full">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation;
            if (navigation && typeof navigation === "object") {
              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }
          }}
          onInit={(swiper) => {
            // Cập nhật lại navigation sau khi init
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation === "object"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          {dataSwipperImage.map((i, idx) => (
            <SwiperSlide
              key={i.id}
              className="overflow-hidden flex-col relative group rounded-xl lg:bg-transparent! bg-white! "
            >
              <div className="relative h-full overflow-hidden rounded-xl">
                <img src={i.image} alt="" className="rounded-xl" />

                <div className="rounded-xl absolute top-0 right-0 left-0 bottom-0 z-60 group-hover:flex hidden bg-[var(--color-primary)]/30 transition-all cursor-pointer justify-start items-end p-6 font-bold">
                  <div className="flex justify-center items-center gap-2">
                    <span>Xem chi tiết</span>
                    <Icon name="icon-right" />
                  </div>
                </div>
              </div>

              <div className="absolute top-5 left-5 z-50 bg-white px-6 py-1 text-[var(--color-primary)] rounded-full font-quicksand-bold shadow text-[14px] lg:text-[18px]">
                Nổi bật
              </div>

              <div className="mt-4 w-full text-left px-4 font-quicksand-medium lg:text-white text-black pb-5">
                <p className="text-[14px] lg:text-[18px] font-bold">
                  {i.content}
                </p>
                <p className="text-[10px] lg:text-[14px] text-gray-300 pt-2">
                  {i.time}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="hidden lg:block cursor-pointer absolute top-[40%] -left-3 lg:-left-7 z-10 bg-gray-500 p-3 rounded-full rotate-180 hover:bg-[var(--color-primary)] shadow-sm hover:shadow-white transition-all"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <Icon name="icon-right-v2" />
        </button>
        <button
          ref={nextRef}
          className="hidden lg:block cursor-pointer absolute top-[40%] -right-3 lg:right-7 z-10 bg-gray-500 p-3 rounded-full hover:bg-[var(--color-primary)] shadow-sm hover:shadow-white transition-all"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <Icon name="icon-right-v2" />
        </button>

        <div
          className="lg:hidden block"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <button
            className={`w-full flex justify-center items-center gap-2 cursor-pointer mt-4 sm:mt-8 inline-flex items-center gap-2 border border-white/70 rounded-full text-sm px-6 py-3 hover:bg-white hover:text-[#4A2E77] transition-all duration-300`}
          >
            Xem tất cả
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
