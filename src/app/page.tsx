"use client";
import banner2 from "@/assets/images/banner2.png";
import banner from "@/assets/images/image.png";

import bgkhoinguonmobile from "@/assets/images/Containertkhoinguonmobile.png";
import linhvuc1 from "@/assets/images/linh-vuc-1.png";
import linhvuc2 from "@/assets/images/linh-vuc-2.png";
import nikon from "@/assets/images/nikon.png";
import donghanh1 from "@/assets/images/dong-hanh-1.png";

import doitac1 from "@/assets/images/doi-tac-1.png";
import doitac3 from "@/assets/images/doi-tac-3.png";
import doitac4 from "@/assets/images/doi-tac-4.png";
import doitac5 from "@/assets/images/doi-tac-5.png";
import doitac6 from "@/assets/images/doi-tac-6.png";

import footer1 from "@/assets/images/footer-1.png";

import tamnhin from "@/assets/images/tam-nhin.png";
import { useEffect, useRef } from "react";

import "@/scss/home.scss";
import { Button, Flex } from "antd";
import Icon from "@/assets";
import YourComponent from "@/components/YourComponent";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import Ecosystem from "@/components/Ecosystem";
import { dataDevelop } from "@/data/develop";
import { ArrowRight } from "lucide-react";
import SwiperImage from "@/components/SwiperImage";
import MarqueeSlider from "@/components/Swiper";
import Avatar from "@/components/Avatar";
import YouTubeEmbed from "@/components/YouTubeEmbed";

export default function Home() {
  const bannerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const bannerElement = bannerRef.current;
  //   if (!bannerElement) return;

  //   // Thêm CSS classes để tối ưu
  //   bannerElement.style.willChange = "background-position";

  //   let rafId: number | null = null;
  //   let lastYPos = 5;

  //   const handleScroll = () => {
  //     if (rafId) return;

  //     rafId = requestAnimationFrame(() => {
  //       const scrollY = window.scrollY;
  //       const bannerTop = bannerElement.offsetTop;
  //       const bannerHeight = bannerElement.offsetHeight;

  //       let yPos = 5;
  //       if (scrollY > bannerTop) {
  //         const scrollPercent = (scrollY - bannerTop) / bannerHeight;
  //         yPos = 5 + scrollPercent * 100;
  //         yPos = Math.min(yPos, 100);
  //       }

  //       // Chỉ cập nhật khi có sự thay đổi đáng kể
  //       if (Math.abs(yPos - lastYPos) > 0.5) {
  //         bannerElement.style.backgroundPosition = `center ${yPos}%`;
  //         lastYPos = yPos;
  //       }

  //       rafId = null;
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     if (rafId) cancelAnimationFrame(rafId);
  //   };
  // }, []);

  return (
    <div className="">
      <section ref={bannerRef} className="h-screen relative parallax-banner">
        <div className="lg:text-[62px] text-[32px] font-quicksand-bold text-white leading-tight flex items-end h-full pb-10">
          <div className="container">
            <div
              className="slogan-container"
              data-aos="diagonal-reveal"
              data-aos-duration="1200"
              data-aos-easing="ease-in-sine"
              data-aos-delay="500"
            >
              <div className="slogan-line">ĐỒNG HÀNH</div>
              <div className="slogan-line">KHỞI THỈNH VƯỢNG!</div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <YourComponent
          mobile={
            <div>
              <img
                src={bgkhoinguonmobile.src}
                alt=""
                className="h-auto w-full"
              />
            </div>
          }
          tablet={<img src={banner.src} alt="" className="h-screen w-full" />}
        />
        <div className="absolute top-20 left-0 right-0 text-white font-quicksand-bold z-[100]">
          <div className="container">
            <ul
              className="list-disc pl-5 text-[12px] md:text-[16px] mb-3"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <li>CÔNG TY CỔ PHẦN TẬP ĐOÀN AMI&M VIỆT NAM</li>
            </ul>

            <div
              className="text-[32px] md:text-[62px] leading-[1.3]"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              KHỞI ĐẦU TỪ <br /> TÌNH BẰNG HỮU
            </div>

            <div
              className="max-w-md mt-10 text-[12px] md:text-[16px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <p className="mb-8">
                Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí
                hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ
                lực không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào
                hoạt động.
              </p>
              <p>
                Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó
                và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM
                - AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức
                thử thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá
                trị mà mình tin tưởng.
              </p>
            </div>

            <Button
              type="primary"
              className="rounded-3xl! mt-10 h-12! px-6!"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <Flex
                justify="space-between"
                className="items-center gap-2 font-quicksand-bold"
              >
                <span className="text-[12px] md:text-[16px]">
                  HÀNH TRÌNH CỦA AMI&M
                </span>
                <Icon name="icon-right" />
              </Flex>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-10 w-50 lg:w-100 bg-white" />
        <div className="absolute -bottom-25 right-0 left-0 w-full">
          <img src={banner2.src} alt="" className="h-[300px] w-full" />
        </div>
      </section>
      <section className="relative h-screen overflow-hidden pt-12 font-quicksand-bold">
        <img
          src={tamnhin.src}
          alt="tam-nhin"
          className="mx-auto absolute top-1/2 left-1/2 -translate-1/2 min-w-[1000px]"
        />

        <div className="absolute top-[40%] right-0 left-0">
          <p
            className="text-center flex justify-center items-center gap-2 sm:mb-6 mb-2 text-[#328ae2] text-[14px] md:text-xl relative"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <span className="w-1 h-1 rounded-full bg-[#328ae2]"></span>
            TẦM NHÌN
            <span className="w-1 h-1 rounded-full bg-[#328ae2]"></span>
          </p>
          <p
            className="text-[var(--color-primary)] max-w-[440px] lg:max-w-[780px] mx-auto px-6 sm:px-0 text-center text-2xl lg:text-4xl leading-[1.3]"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
          >
            Ami&M xây dựng{" "}
            <span className="custom-color-text bg-clip-text text-transparent">
              hệ sinh thái đa ngành
            </span>{" "}
            <span className="custom-color-text bg-clip-text text-transparent">
              phát triển nhanh và bền vững
            </span>{" "}
            trên hành trình kiến tạo sự thịnh vượng đích thực!
          </p>
        </div>
      </section>
      <section className="relative">
        <Icon
          name="icon-deco-1"
          className="w-screen absolute top-0 right-0 left-0"
        />
        <div className="pt-50">
          <p
            className="text-center flex justify-center items-center gap-2 mb-6 text-[#328ae2] text-sm lg:text-xl relative"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <span className="w-1 h-1 rounded-full bg-[#328ae2]"></span>
            SỨ MỆNH
            <span className="w-1 h-1 rounded-full bg-[#328ae2]"></span>
          </p>
          <p
            className="text-[var(--color-primary)] max-w-[440px] lg:max-w-[780px] mx-auto px-2 text-center text-xl md:text-4xl leading-[1.3]"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
          >
            <span className="block custom-color-text bg-clip-text text-transparent">
              Mang lại cuộc sống tốt đẹp hơn
            </span>
            <span className="block custom-color-text bg-clip-text text-transparent">
              cho những người đồng hành
            </span>
          </p>
        </div>
        <HorizontalScrollSection />
      </section>
      <section className="h-[180vh] md:h-[120vh] relative bg-white overflow-hidden font-quicksand-bold">
        <img
          src={linhvuc1.src}
          alt=""
          className="absolute top-0 h-full md:block hidden"
        />

        <div className="md:flex block justify-between items-start gap-4 container">
          <div className="flex-1">
            <ul
              className="list-disc pl-5 text-[14px] md:text-[16px] mb-3 text-[#165BB8] pt-20"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <li>HỆ SINH THÁI AMI&M</li>
            </ul>
            <p
              className="custom-color-text max-w-[600px] text-[26px] md:text-[32px] leading-tight pr-10"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao
              cấp và nâng tầm giáo dục trải nghiệm.
            </p>

            <p
              className="max-w-[500px] mt-10 pr-10 text-[14px] md:text-[16px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
              vượng đích thực cho những Người đồng hành và tạo lập di sản xứng
              tầm cho thế hệ tương lai.{" "}
            </p>

            <div
              className="absolute bottom-0 left-[5%] md:block hidden"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <div className="absolute -bottom-[14%] left-0 opacity-[30%] w-[470px] h-[470px] overflow-hidden bg-gradient-to-b from-[#3E4089] to-[#3E408900] rounded-[100%]" />
              <img
                src={linhvuc2.src}
                alt=""
                className="max-w-[600px] max-h-[600px] "
              />
            </div>
          </div>

          <Ecosystem />
        </div>
      </section>
      <section className="md:flex block justify-between items-start gap-6 relative">
        <div className="sticky top-0 md:top-50 left-0 flex-1 pb-10 md:pb-50 bg-white">
          <div className="container">
            <ul
              className="list-disc pl-8 mb-3 text-[#165BB8] pt-10 md:pt-20"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <li className="text-[14px] md:text-[20px]">
                TỪNG BƯỚC PHÁT TRIỂN
              </li>
            </ul>
            <p
              className="max-w-[440px] lg:max-w-[780px] mx-auto px-2 leading-[1.3]"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-delay="300"
            >
              <span className="custom-color-text text-[32px] lg:text-[62px] pb-4 block">
                Dấu ấn Ami&M
              </span>
              <span className="block text-[16] lg:text-[24px]">
                Những con số chỉ là một phần của câu chuyện, ý nghĩa thực sự là
                những dấu ấn sâu đậm về sự đổi mới, trách nhiệm xã hội và sự tin
                cậy từ những Người đồng hành.
              </span>
            </p>
          </div>
        </div>

        <div className="flex-1">
          {dataDevelop.map((i, idx) => (
            <div
              className="min-h-[240px] border border-gray-200 p-4 flex justify-start items-center block-text-hover"
              key={i.id}
            >
              <div className="flex justify-start items-center gap-10">
                <div className="bg-[#FBFBFB] rounded-full p-4 flex justify-center items-center">
                  <img src={i.icon} alt="" />
                </div>
                <div className="">
                  <div className="text-4xl font-quicksand-bold font-bold text-[var(--color-primary)] md:custom-color-text custom-color-text-hover">
                    {i.number}
                  </div>
                  <div className="pt-1 text-gray-400 text-lg">{i.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="h-screen relative">
        <img src={nikon.src} alt="" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-[450px] bg-gradient-to-b to-[#102A4D] from-[#25589D00]" />
        <h3 className="text-white absolute bottom-0 left-0 text-md md:text-4xl text-center w-full pb-20">
          <div>
            <p>“Tình bằng hữu, sự chính trực và tinh thần</p>
          </div>
          <div>
            <p>tự nâng tầm hun đúc nên sức mạnh của một tổ chức không ngừng</p>
          </div>
          <div>
            <p>phát triển và kiến tạo giá trị.”</p>
          </div>
        </h3>
      </section>
      <section className="h-[120vh] relative overflow-hidden">
        <div className="h-full w-full bg-[#102A4D] relative">
          <div className="absolute bottom-0 right-0 min-w-[1200px] -left-20 lg:left-0 z-20">
            <div className="relative">
              <Icon name="icon-deco-hop-tac" className="w-full" />
              <div className="absolute lg:top-6 top-4 xl:left-50 left-40 text-[#165BB8] font-bold">
                <ul
                  className="list-disc pl-4 pb-2"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <li className="text-[14px] lg:text-[20px]">
                    ĐỐI TÁC TIÊU BIỂU
                  </li>
                </ul>
                <p
                  className="leading-[1.3]"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay="300"
                >
                  <span className="custom-color-text text-[18px] lg:text-[24px]">
                    ĐỒNG HÀNH CÙNG AMI&M
                  </span>
                </p>
              </div>

              <div
                className="absolute bottom-0 right-0 left-0 lg:h-[calc(100%-120px)] h-[calc(100%-80px)]"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
              >
                <MarqueeSlider
                  images={[
                    doitac1.src,
                    doitac3.src,
                    doitac4.src,
                    doitac5.src,
                    doitac6.src,
                  ]}
                />
              </div>
            </div>
          </div>

          <img
            src={footer1.src}
            alt=""
            className="absolute top-0 left-0 lg:w-auto w-[50%]"
          />
          <img
            src={footer1.src}
            alt=""
            className="absolute bottom-40 right-0 rotate-180 lg:w-auto w-[50%]"
          />
          <Icon
            name="icon-vertor-menu"
            className="absolute bottom-0 left-0 z-10"
          />

          <div className="absolute bottom-0 top-0 right-0 left-0 z-100">
            <Avatar />
          </div>
        </div>
      </section>
      <section className="h-screen overflow-hidden">
        <YouTubeEmbed videoId="https://www.youtube.com/watch?v=bPXTwcaFbZc&list=RDbPXTwcaFbZc&start_radio=1" />
      </section>
      <section className="h-[110vh] relative pb-0 lg:pb-20 pt-10">
        <div className="w-[95%] mx-auto text-white font-quicksand-medium bg-[var(--color-primary)] shadow-lg shadow-gray-500 rounded-3xl h-full p-5 lg:p-20 pb-5 lg:pb-0 lg:pr-0 pr-5 grid grid-cols-3 gap-5 lg:gap-20">
          <div className="col-span-3 lg:col-span-1 flex flex-col gap-1 lg:gap-5 pt-0 lg:pt-20">
            <ul
              className="list-disc pl-5 text-[14px] lg:text-[16px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <li>DANH SÁCH TIN TỨC</li>
            </ul>

            <h1
              className="text-[26px] lg:text-[42px] leading-[1.3] font-bold"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              Có gì mới tại Ami&M?
            </h1>

            <div
              className="hidden lg:block"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              <p className="text-[12px] lg:text-[16px]">
                Ami&M, viết tắt của Amity and More Tình bằng hữu và hơn thế nữa
                chính là cái tên và cũng là sự khẳng định cho tôn chỉ mà chúng
                tôi luôn tâm niệm.
              </p>

              <button
                className={`max-w-[200px] flex justify-center items-center gap-2 cursor-pointer mt-4 sm:mt-8 inline-flex items-center gap-2 border border-white/70 rounded-full text-sm px-6 py-3 hover:bg-white hover:text-[#4A2E77] transition-all duration-300`}
              >
                Xem tất cả
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
          <div className="col-span-3 lg:col-span-2 relative h-[90%]">
            <SwiperImage />
          </div>
        </div>
      </section>
      <section className="h-[60vh] md:h-[125vh] relative md:px-10 px-5">
        <img
          src={donghanh1.src}
          alt=""
          className="absolute bottom-0 right-0 left-0 w-full"
        />

        <div className="max-w-[700px] mx-auto text-center flex flex-col justify-center items-center gap-4 md:gap-6 pt-10">
          <p
            className="text-center flex justify-center items-center gap-2 text-[#328ae2] text-[14px] md:text-xl relative font-quicksand-regular"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <span className="w-1 h-1 rounded-full bg-[#328ae2]"></span>
            ĐỒNG HÀNH TIẾN BƯỚC
            <span className="w-1 h-1 rounded-full bg-[#328ae2]"></span>
          </p>

          <div
            className="text-[24px] md:text-[42px] leading-[1.3] font-quicksand-bold custom-color-text"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            Chào đón bạn trở thành Người đồng hành tiếp theo!
          </div>

          <div
            className="max-w-md text-[12px] md:text-[18px] font-quicksand-bold"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <p className="">
              Bạn thích một môi trường làm việc năng động, sáng tạo và gắn kết?
              Hãy ứng tuyển để trở thành thành viên trong gia đình Ami&M!
            </p>
          </div>

          <Button
            type="primary"
            className="rounded-3xl! h-12! px-6!"
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
          >
            <Flex
              justify="space-between"
              className="items-center gap-2 font-quicksand-bold"
            >
              <span className="text-[12px] md:text-[16px]">
                Cơ hội việc làm
              </span>
              <Icon name="icon-right" />
            </Flex>
          </Button>
        </div>
      </section>
    </div>
  );
}
