"use client";

import Icon from "@/assets";
import LangToggle from "@/components/LangToggle";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Button, Drawer } from "antd";
import { useEffect, useRef, useState } from "react";
import MenuHeader from "./MenuHeader";
export type Placement = "left" | "right" | "top" | "bottom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [placement, setPlacement] = useState<Placement | undefined>("top");
  const [headerVisibleMobile, setHeaderVisibleMobile] = useState(false);
  const [vewBg, setVewBg] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      // Kiểm tra scroll xuống
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHeaderVisible(false);
        setVewBg(true);
      }
      // Kiểm tra scroll lên
      else if (currentScrollY < lastScrollY.current) {
        setHeaderVisible(true);
      }

      // Kiểm tra scroll lên đầu (luôn chạy, không phải else if)
      if (currentScrollY <= 700) {
        setVewBg(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  const showDrawer = () => {
    setOpen(true);
    setPlacement("top");
  };
  const onClose = () => {
    setOpen(false);
  };

  const showDrawerModel = () => {
    setPlacement("left");
    setHeaderVisibleMobile(true);
  };
  const onCloseMobile = () => {
    setHeaderVisibleMobile(false);
  };

  return (
    <>
      <header
        className={`${vewBg ? "bg-white shadow-lg" : "bg-gradient-to-b from-[#40435476] to-[#d4d4d400]"}  h-[70px] sm:h-[90px] fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ease-in-out ${
          headerVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } `}
      >
        <div
          className="pt-3 flex justify-between items-center container"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
        >
          <div className="text-[var(--color-primary)]">
            <Icon name="icon-logo" className="w-20 lg:w-30" />
          </div>

          <div className="sm:hidden block">
            <Button
              onClick={showDrawerModel}
              className="rounded-[100%]! p-0! h-12! w-12! shadow-none!"
              type="primary"
            >
              <Icon name="icon-menu" />
            </Button>
          </div>
          <div className="justify-between items-center gap-4 sm:flex hidden">
            <LangToggle />

            <div
              onClick={showDrawer}
              className={`cursor-pointer h-[45px] 
                border-[#FFFFFF4D] border rounded-[25px] w-[130px]
                ${!vewBg ? "text-white bg-transparent!" : "text-[var(--color-primary)] bg-[#231F2021]"}  font-semibold flex justify-center items-center gap-2`}
            >
              <span className="font-quicksand-bold">Menu</span>
              <Icon name="icon-menu" className="w-5" />
            </div>
          </div>
        </div>
      </header>

      <Drawer
        placement={placement}
        closable={false}
        onClose={!open ? onCloseMobile : onClose}
        open={open ? open : headerVisibleMobile}
        key={placement}
        rootStyle={{
          transition: "all 5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        size="large"
        style={{
          height: "100vh",
        }}
        styles={{
          body: {
            padding: 0,
          },
          wrapper: {
            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          },
          mask: {
            transition: "opacity 0.6s ease-in-out",
          },
        }}
      >
        <MenuHeader onClickClose={onClose} onCloseMobile={onCloseMobile} />
      </Drawer>
      <div
        className={`fixed bottom-8 right-8 z-[200] transition-all duration-300 ${
          headerVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <ScrollToTopButton />
      </div>
    </>
  );
}
