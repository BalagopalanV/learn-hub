"use client";
import React, { useEffect, useState } from "react";
import Primarybutton from "@/component/primaryButton/Primarybutton ";
import Image from "next/image";
import compassImage from "../../../assets/images/img_compass.svg";
import { poppins } from "../../../../public/fonts/fonts";
import BackgroundImage from "../../../assets/images/img_wel_bg.svg";
import mobBackgroundImage from "../../../assets/images/img_land_bg_mob.svg";

const Welcome = () => {
  const [background, setBackground] = useState(BackgroundImage.src);

  useEffect(() => {
    const updateBackground = () => {
      if (window.innerWidth < 768) {
        setBackground(mobBackgroundImage.src);
      } else {
        setBackground(BackgroundImage.src);
      }
    };

    updateBackground();

    window.addEventListener("resize", updateBackground);

    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  return (
    <section className="relative max-w-[1700px] mx-auto p-[10px] font-sans font-extrabold h-[100vh] w-full">
      <div
        className="w-full h-full rounded-[25px] flex flex-col md:flex-row items-center md:justify-between justify-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white w-full mt-[3rem] text-left md:text-left space-y-4 px-5 flex flex-col justify-center items-start">
          <p
            className={`${poppins.className} text-uppercase bg-gradient-to-r from-[#FFFFFF] to-[#DFEAFD] bg-clip-text text-transparent tracking-wide font-light`}
          >
            WE’RE NOT JUST ANOTHER TRAINING INSTITUDE
          </p>
          <hr className="w-full h-[1px] border-0 bg-gradient-to-r from-[#D7E5FD] to-[#D7E5FD] mx-0" />
          <h1
            className={`${poppins.className} text-[2.5rem] md:text-[3rem] font-bold leading-[calc(3rem+3vw)]  md:text-left`}
          >
            <span className="block">Bytecompass</span>
            <span className="block md:inline">Is A&nbsp;</span>
            <span className="block md:inline">Career Accelerator</span>
          </h1>
          <Primarybutton
            label="Explore Courses"
            className={`${poppins.className} bg-[#FDFDFD] w-fit text-[#8061FF] mx-0`}
          />
        </div>

        <div className=" md:w-1/2 absolute md:right-0 right-[-2px] md:bottom-0  bottom-0 flex justify-center md:justify-end">
          <Image
            src={compassImage}
            alt="Bytecompass"
            className="w-[100%] md:w-[100%] max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
