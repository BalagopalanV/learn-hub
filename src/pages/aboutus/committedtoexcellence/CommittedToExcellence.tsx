"use client";
import React, { useEffect, useState } from "react";
import webAbtExcellenceImg from "../../../assets/images/img_abt_excellence.svg";
import mobAbtExcellenceImg from "../../../assets/images/img_mobile_abt.svg";

import { poppins } from "../../../../public/fonts/fonts";

const CommittedToExcellence = () => {
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
    <section className="relative max-w-[1700px] mx-auto p-[10px] font-sans font-extrabold h-[100vh] w-full">
      <div
        className="w-full h-full rounded-[25px] flex flex-col md:flex-row items-center md:justify-between justify-center"
        style={{
          backgroundImage: isMobile
            ? `url(${mobAbtExcellenceImg.src})`
            : `url(${webAbtExcellenceImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-1 md:justify-end justify-center h-[100%] items-center px-6 md:px-10">
          <div className="flex flex-col h-full justify-end md:justify-center md:items-end items-center flex-[1] md:flex-[0.5] ">
            <h4
              className={`${poppins.className} md:text-end text-center text-[1.8rem] md:text-[2.8rem] text-[#FDFDFD] font-medium`}
            >
              Committed to Excellence
            </h4>
            <p
              className={`${poppins.className} py-4 pb-[2rem] leading-3 leading-[2.5rem] md:leading-[2.5rem] md:text-end text-center text-[1.2rem] md:text-[1.4rem] text-[#FDFDFD] font-light`}
            >
              As a recognized and trusted IT training provider, Bytecompass has
              been at the forefront of empowering professionals with
              industry-leading expertise. Our in-person, hands-on training
              programs are designed to bridge the gap between theory and
              real-world application, ensuring every learner is job-ready and
              future-proof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommittedToExcellence;
