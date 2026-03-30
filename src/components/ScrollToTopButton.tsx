"use client";

import Icon from "@/assets";
import { Button } from "antd";
import { memo, useCallback, useEffect, useState } from "react";

function ScrollToTopButton() {
  const [locomotive, setLocomotive] = useState<any>(null);

  useEffect(() => {
    const getLocomotive = () => {
      if (typeof window !== "undefined" && (window as any).locomotiveScroll) {
        setLocomotive((window as any).locomotiveScroll);
        return true;
      }
      return false;
    };

    if (getLocomotive()) return;
    const interval = setInterval(() => {
      if (getLocomotive()) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = useCallback(() => {
    if (locomotive) {
      if (locomotive.lenis) {
        locomotive.lenis.scrollTo(0, {
          duration: 0.8,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else if (typeof locomotive.scrollTo === "function") {
        locomotive.scrollTo(0);
      }

      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [locomotive]);

  return (
    <Button
      onClick={scrollToTop}
      color="primary"
      variant="outlined"
      className="rounded-[100%]! h-10! w-10! bg-transparent! -rotate-90 shadow-none! p-0!"
      aria-label="Lên đầu trang"
    >
      <Icon name="icon-right"/>
    </Button>
  );
}

export default memo(ScrollToTopButton);
