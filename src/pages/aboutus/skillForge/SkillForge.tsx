"use client";
import React, { useEffect, useState } from "react";
import webBackgroundImageLayer from "../../../assets/images/img_about_us.svg";
import mobBackgroundImageLayer from "../../../assets/images/img_mob_about_us.svg";

import webBackgroundImag from "../../../assets/images/img_about.svg";
import mobBackgroundImag from "../../../assets/images/img_mob_abt.svg";

import Image from "next/image";

const SkillForge = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  return (
    <section
      className="w-full min-h-screen md:h-[100vh]  rounded-[25px] flex flex-col items-center justify-center md:justify-end py-8 md:py-0"
      style={{
        backgroundImage: isMobile
          ? `url(${mobBackgroundImageLayer.src})`
          : `url(${webBackgroundImageLayer.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full px-4 md:w-[80%] h-auto md:h-[80%]">
        <Image
          src={isMobile ? mobBackgroundImag : webBackgroundImag}
          className="w-full h-full object-contain"
          alt="about-us"
          priority
        />
      </div>
    </section>
  );
};

export default SkillForge;
