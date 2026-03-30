import React from "react";
import bgfooter1 from "@/assets/images/footer-1.png";
import bgfooter2 from "@/assets/images/footer-2.png";
import Icon from "@/assets";

export default function Footer() {
  return (
    <footer className="text-white relative">
      <div className="bg-[var(--color-primary)]">
        <img
          src={bgfooter1.src}
          alt=""
          className="absolute top-0 left-0"
        />
        <img
          src={bgfooter1.src}
          alt=""
          className="absolute bottom-8 right-0 rotate-180"
        />
        <img
          src={bgfooter2.src}
          alt=""
          className="absolute bottom-10 -left-[20%]"
        />
        <div
          className="relative"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
        >
          <div className="container grid grid-cols-3 gap-12 py-20">
            <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-start gap-10">
              <div className="">
                <Icon name="icon-logo" className="text-white w-[200px]" />
                <p>Creating true prosperity together</p>
              </div>

              <div className="w-full">
                <h1 className="text-[#FFFFFF73] pl-2 pb-5">
                  Đăng ký nhận thông tin từ Ami&M
                </h1>
                <div className="flex justify-start items-center gap-4 border rounded-full p-2">
                  <input
                    type="text"
                    placeholder="Nhập Email của bạn"
                    className="border-none rounded-md p-2 focus:outline-none focus:ring-0 w-full"
                  />

                  <button className="bg-gradient-to-r from-[#2B67B8] to-[#7A44D1] text-white min-w-[100px] py-4 rounded-full cursor-pointer md:text-[16px] font-bold text-[12px]">
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>

            <div className="col-span-3 md:col-span-2 grid grid-cols-4 gap-12 pt-20">
              <div className="col-span-2 md:col-span-1">
                <h1 className="text-[#FFFFFF73] pb-2">KHÁM PHÁ</h1>
                <ul className="text-[14px] sm:text-[16px] space-y-1">
                  <li>Trang chủ</li>
                  <li>Giới thiệu</li>
                  <li>Từ điển Ami&M</li>
                  <li>Tuyển dụng</li>
                  <li>Tin tức</li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h1 className="text-[#FFFFFF73] pb-2">MẠNG XÃ HỘI</h1>
                <ul className="text-[14px] sm:text-[16px] space-y-1">
                  <li>LinkedIn</li>
                  <li>Facebook</li>
                  <li>Youtube</li>
                </ul>
              </div>
              <div className="col-span-4 md:col-span-2">
                <h1 className="text-[#FFFFFF73] pb-2 hidden md:block">
                  LIÊN HỆ
                </h1>
                <ul className="grid grid-cols-2 md:grid-cols-1 md:gap-1 gap-8">
                  <li className="md:col-span-1 col-span-2 grid grid-cols-3 gap-1">
                    <div className="text-[#FFFFFF73] col-span-3 md:col-span-1">
                      Địa chỉ
                    </div>
                    <div className="max-w-[320px] font-semibold text-[14px] sm:text-[16px] col-span-3 md:col-span-2">
                      Số 14 phố Đỗ Hành, phường Nguyễn Du, quận Hai Bà Trưng,
                      thành phố Hà Nội{" "}
                    </div>
                  </li>
                  <li className="grid grid-cols-3 gap-1 mt-1">
                    <div className="text-[#FFFFFF73] col-span-3 md:col-span-1">
                      Điện thoại
                    </div>
                    <div className=" font-semibold text-[14px] sm:text-[16px] col-span-3 md:col-span-2">
                      (+84) 243 201 2889
                    </div>
                  </li>
                  <li className="grid grid-cols-3 gap-1 mt-1">
                    <div className="text-[#FFFFFF73] col-span-3 md:col-span-1">
                      Email
                    </div>
                    <div className=" font-semibold text-[14px] sm:text-[16px] col-span-3 md:col-span-2">
                      Info@amigroup.com.vn
                    </div>
                  </li>
                  <li className="grid grid-cols-3 gap-1 mt-1">
                    <div className="text-[#FFFFFF73] col-span-3 md:col-span-1">
                      Website
                    </div>
                    <div className=" font-semibold text-[14px] sm:text-[16px] col-span-3 md:col-span-2">
                      amigroup.com.vn
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-color-bg text-[#FFFFFF99] text-[10px] md:text-[16px]">
        <div className="container flex justify-around items-center gap-3 py-2">
          <div className="">Copyright 2024 ©Ami&M. All rights reserved.</div>
          <div className="">Design by OKHUB Agency.</div>
        </div>
      </div>
    </footer>
  );
}
