import React from "react";
import book from "../../../assets/icon/ic_book.svg";
import laptop from "../../../assets/icon/ic_laptop.svg";
import Image from "next/image";
import { poppins } from "../../../../public/fonts/fonts";

const CourseDescription = () => {
  return (
    <section className="max-w-[1700px] mx-auto h-auto md:h-[100vh] w-full flex flex-col justify-center items-center my-[2rem] px-4">
      <div className="max-w-[90%] md:max-w-[85%] text-center">
        <h5
          className={`${poppins.className} font-semi text-[#999999] text-[1rem] md:text-[1.2rem] my-6 md:my-12`}
        >
          Welcome to Bytecompass
        </h5>

        <p
          className={`${poppins.className} leading-[3.3rem] md:leading-[5rem]  font-light text-[1.5rem] md:text-3xl lg:text-[2.5rem] text-[#848484]`}
        >
          Our courses bridge the gap between{" "}
          <span
            className="inline-flex h-[40px] md:h-[60px]  md:flex-row items-center gap-1 md:gap-1 px-4 md:px-[2rem] my-[0.3rem] bg-gradient-to-br from-[#AEE3FA] to-[#f9fbfd]"
            style={{
              borderRadius: "50px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(7.1px)",
              WebkitBackdropFilter: "blur(7.1px)",
              border: "2px solid #AEE3FA",
              color: "#1792CC",
            }}
          >
            Theory
            <Image
              src={book}
              alt="label"
              className="object-contain w-10 h-10 md:w-15 md:h-15"
            />
          </span>{" "}
          and{" "}
          <span
            className="inline-flex h-[40px] md:h-[60px] md:flex-row items-center gap-2 md:gap-1 px-4 md:px-[2rem] bg-gradient-to-br from-[#C3BDFF] to-[#f9fbfd]"
            style={{
              borderRadius: "50px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(7.1px)",
              WebkitBackdropFilter: "blur(7.1px)",
              border: "2px solid #C3BDFF",
              color: "#8A82E5",
            }}
          >
            Practical Application
            <Image
              src={laptop}
              alt="label"
              className="object-contain w-10 h-10 md:w-15 md:h-15"
            />
          </span>{" "}
          , ensuring you step into the IT industry with confidence. With a
          strong network of hiring partners, our students get direct exposure to
          job opportunities.
        </p>
      </div>
    </section>
  );
};

export default CourseDescription;
