import React from "react";
import { poppins } from "../../../../public/fonts/fonts";

const StartSuccessHero = () => {
  return (
    <section className="w-full h-[60vh] md:h-[100vh] flex flex-col items-center justify-center text-center px-5 py-[5rem]">
      <h1
        className={`${poppins.className} text-[2.3rem] px-8 md:pb-6 md:text-[2.5rem] font-semi text-[#242424] leading-tight}`}
      >
        Start Learning. Start Growing. Start Succeeding!
      </h1>

      <p
        className={`${poppins.className} font-light text-lg md:text-[1rem] text-gray-500 max-w-4xl mt-4`}
      >
        Gain real-world experience, learn from industry experts, and build a
        career in IT. Bytecompass is here to guide you every step of the way.
      </p>

      <button
        className={`${poppins.className} mt-6 bg-[#8061FF] text-[#FDFDFD] px-6 py-4 rounded-full text-[1.1rem] font-semi shadow-md hover:bg-purple-600 transition-all`}
      >
        Explore Courses
      </button>
    </section>
  );
};

export default StartSuccessHero;
