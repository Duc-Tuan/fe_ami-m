import React, { useState, useEffect } from "react";

const YourComponent = ({
  tablet,
  mobile,
}: {
  tablet: React.ReactNode;
  mobile: React.ReactNode;
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? mobile : tablet;
};

export default YourComponent;
