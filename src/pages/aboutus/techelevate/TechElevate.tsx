import React from "react";
import Image from "next/image";
import teamImage from "../../../assets/images/img_it_professional.svg";
import { poppins } from "../../../../public/fonts/fonts";

const TechElevate = () => {
  return (
    <section className="w-full mb-[5rem] min-h-[100vh] flex-col flex items-center justify-center px-6 md:px-16">
      <h2
        className={`${poppins.className} text-[2.5rem] font-semibold text-[#242424] text-center md:text-left`}
      >
        Empowering a generation of IT-Professionals
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-1 md:order-2 flex justify-center pt-[2rem]">
          <Image src={teamImage} alt="IT Professionals" />
        </div>

        <div className="order-2 md:order-1">
          <p
            className={`${poppins.className} leading-[2.5rem] text-[#848484] text-[1.3rem] font-light mt-4 text-center md:text-left`}
          >
            At Bytecompass, we don’t just teach—we transform learners into
            industry-ready professionals. Our in-person, hands-on training
            programs bridge the gap between theory and real-world application,
            ensuring every student builds skills, creates careers, and
            transforms their future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechElevate;
