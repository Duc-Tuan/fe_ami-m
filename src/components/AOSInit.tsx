"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;

      AOS.init({
        duration: 500,
        once: true,
        offset: 0,
        easing: "ease-out-cubic",
        delay: 0,
        disable: false,
        startEvent: "DOMContentLoaded",
        throttleDelay: 0,
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return null;
};

export default AOSInit;
