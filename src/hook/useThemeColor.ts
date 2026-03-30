"use client";

// hooks/useThemeColor.ts
import { useEffect, useState } from 'react';

export const useThemeColor = () => {
  const [primaryColor, setPrimaryColor] = useState<string>('#1677ff');

  useEffect(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-primary")
      .trim();
    setPrimaryColor(color);
  }, []);

  return primaryColor;
};