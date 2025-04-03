"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import postImage from "../../../../src/assets/images/img_post_det.svg";
import iconclock from "../../../assets/icon/ic_clock.svg";
import iconbadge from "../../../assets/icon/ic_bag.svg";
import { poppins } from "../../../../public/fonts/fonts";

const CoursesDetails = () => {
  return (
    <section className="max-w-[1700px] mx-auto p-[10px] font-sans font-extrabold h-[100vh] w-full flex items-end">
      <div className="w-full h-[85%] bg-[#0078E1] rounded-[25px] px-5 py-5 flex md:flex-row flex-col items-center justify-between">
        <div className="flex-[0.5] h-full">
          <Image
            src={postImage}
            alt="Frontend Development"
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="flex-[0.5] h-full ">
          <div className="w-full h-full space-y-4 text-left flex flex-col justify-center">
            <div className="flex flex-row items-center gap-x-[1rem]">
              <span
                className={`${poppins.className} bg-red-500 text-[0.9rem] text-[#FFFFFF] font-medium md:text-[0.8rem]  px-3 py-1 rounded-full`}
              >
                Limited Offer
              </span>
              <span
                className={`${poppins.className} font-medium text-[0.9rem] text-[#fff]`}
              >
                20% OFF - Ends soon!s
              </span>
            </div>
            <h2
              className={`${poppins.className} font-semibold text-[#FFFFFF] text-[2rem] `}
            >
              Master The Art Of Front-End Development
            </h2>
            <p
              className={`${poppins.className} font-light text-[0.9rem] text-[#D1E4F5]`}
            >
              Learn how to build modern, interactive, and user-friendly websites
              with HTML, CSS, JavaScript, and the latest front-end frameworks.
            </p>
            <div className="flex flex-row items-center gap-4 ">
              {/* Duration Card */}
              <div className="flex flex-row gap-4">
                <div className="bg-[#3393E7] border-[1px]  border-[#4DA1EA] flex flex-col items-center text-white px-4 gap-6 py-4 rounded-xl text-center w-28">
                  <p
                    className={`${poppins.className} font-semibold text-[0.8rem]`}
                  >
                    6 Weeks
                  </p>
                  <div className="">
                    <Image src={iconclock} alt="icon" />
                  </div>
                </div>

                <div className="bg-[#3393E7] border-[1px] border-[#4DA1EA] flex flex-col items-center text-white px-4 gap-6 py-4 rounded-xl text-center w-28">
                  <p
                    className={`${poppins.className} font-semibold text-[0.8rem]`}
                  >
                    Beginner
                  </p>
                  <div className="">
                    <Image src={iconbadge} alt="icon" />
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-[#3393E7]  border-[1px] border-[#4DA1EA]  px-6 py-3 rounded-xl flex items-center space-x-4  justify-between">
                  <div className="flex flex-row gap-x-2">
                    <p
                      className={`${poppins.className} font-semibold text-[#C5DDF3] gray-400 line-through`}
                    >
                      ₹2,000
                    </p>
                    <p
                      className={`${poppins.className} font-semibold text-[#FFFFFF]`}
                    >
                      ₹1,500
                    </p>
                  </div>
                  <a
                    href="#"
                    className={`${poppins.className} px-4 py-2 rounded-[25px] font-semibold bg-[#fff] text-[#3393E7] `}
                  >
                    Enroll now
                  </a>
                </div>

                {/* Payment Methods */}
                <div className="text-white">
                  <p
                    className={`${poppins.className} font-medium text-[#E1F1FF] text-[0.8rem] py-2`}
                  >
                    Payment Methods
                  </p>
                  <p
                    className={`${poppins.className} font-bold text-[#FFFFFF] text-[0.8rem]`}
                  >
                    UPI, Cards, EMI available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesDetails;
