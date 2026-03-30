"use client";

import Icon from "@/assets";
import { Func } from "@/types/typeGlobal";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function SplashScreen({
  handleSplashComplete,
  setShowAOS,
}: {
  handleSplashComplete: Func;
  setShowAOS: Dispatch<SetStateAction<boolean>>;
}) {
  const [size, setSize] = useState(0);

  useEffect(() => {
    // Lưu scrollbar width để tránh layout shift
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Chặn scroll và giữ nguyên vị trí
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    // Animation circle
    const t2 = setTimeout(() => {
      let start = 0;
      let end = 200;
      let duration = 2000;
      let startTime: any = null;

      function animateCircle(timestamp: any) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const current = start + (end - start) * progress;
        setSize(current);
        if (progress < 1) {
          requestAnimationFrame(animateCircle);
          setShowAOS(false);
        } else {
          document.body.style.overflow = "";
          document.body.style.paddingRight = "";
          handleSplashComplete();
        }
      }
      requestAnimationFrame(animateCircle);
    }, 800);

    return () => {
      clearTimeout(t2);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        width: "100%",
        height: "100%",
        background: "white",
        WebkitMask: `radial-gradient(circle ${size}vmax at 50% 50%, transparent 99%, black 100%)`,
        mask: `radial-gradient(circle ${size}vmax at 50% 50%, transparent 99%, black 100%)`,
        transition: "mask 0.05s linear, -webkit-mask 0.05s linear",
      }}
    >
      <span className="block w-50 h-50 text-[var(--color-primary)]">
        <Icon name="icon-logo" />
      </span>
    </div>
  );
}
