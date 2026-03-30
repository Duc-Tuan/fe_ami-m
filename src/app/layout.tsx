// app/layout.tsx
"use client";
import "./globals.css";
import AOSInit from "@/components/AOSInit";
import { useThemeColor } from "@/hook/useThemeColor";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import { ConfigProvider } from "antd";
import { hexToRgba } from "@/types/functGlobal";
import Header from "@/templates/header";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/templates/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const primaryColor = useThemeColor();
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [showAOS, setShowAOS] = useState<boolean>(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <title>AMI&M</title>
        <meta name="description" content="AMI&M" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className={`min-h-full flex flex-col`}>
        {/* {showSplash && (
          <SplashScreen
            handleSplashComplete={handleSplashComplete}
            setShowAOS={setShowAOS}
          />
        )} */}

        <div
          style={{
            transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
            // opacity: !showAOS ? 1 : 0,
          }}
          className="flex-1 flex flex-col relative"
        >
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: primaryColor,
                borderRadius: 2,
              },
              components: {
                Menu: {
                  itemHoverBg: hexToRgba(primaryColor, 0.1),
                  itemHoverColor: primaryColor,
                },
              },
            }}
          >
            <AOSInit />
            <Header />
            <SmoothScroll>
              <main>{children}</main>
            </SmoothScroll>
            <Footer />
          </ConfigProvider>
        </div>
      </body>
    </html>
  );
}
