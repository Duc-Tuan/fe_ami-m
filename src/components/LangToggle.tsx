"use client";

import { Button } from "antd";
import { useState } from "react";
import "@/scss/lang-toggle.scss";

export default function LangToggle() {
  const [lang, setLang] = useState("vie");

  return (
    <div className="lang-switch">
      <div className={`lang-pill ${lang === "eng" ? "right" : "left"}`} />

      <div
        className="lang-option font-quicksand-bold text-sm! font-semibold! h-[36px]! h-[36px]! rounded-[100%]! flex justify-center items-center"
        onClick={() => setLang("vie")}
      >
        VIE
      </div>

      <div
        className="lang-option font-quicksand-bold text-sm! font-semibold! h-[36px]! h-[36px]! rounded-[100%]! flex justify-center items-center"
        onClick={() => setLang("eng")}
      >
        ENG
      </div>
    </div>
  );
}
