import React from "react";
import Image from "next/image";
import ArrowIcon from "../../assets/icon/ic_arrow.svg";
import { poppins } from "../../../public/fonts/fonts";

interface CourseCardProps {
  imageUrl: string;
  level: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  link?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  imageUrl,
  level,
  title,
  description,
  price,
  duration,
  link = "#",
}) => {
  return (
    <div
      className={`${poppins.className} flex flex-col sm:flex-row items-center gap-6 p-1 w-full my-[1rem]`}
    >
      <div className="w-full sm:w-[45%] h-80 bg-gray-300 rounded-xs overflow-hidden order-1 sm:order-none">
        {/* Uncomment the Image when needed */}
        {/* <Image
      src={imageUrl}
      alt={title}
      width={400}
      height={300}
      className="w-full h-full object-cover"
    /> */}
      </div>

      <div className="flex-1 w-full space-y-3 order-2 flex items-start justify-between">
        <div className="flex-1">
          <span className="font-medium w-fit bg-[#8061FF] text-white text-[14px] md:text-[12px] px-5 md:px-3 py-1 rounded-full">
            {level}
          </span>

          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-black text-2xl my-[1rem] w-[100%] md:w-[65%]">
              {title}
            </h3>

            <a
              href={link}
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-[#D9D9D9] text-white hover:bg-purple-600 transition"
            >
              <Image src={ArrowIcon} alt="Go to Course" />
            </a>
          </div>

          <p className="text-gray-500 text-sm">{description}</p>

          <div className="flex sm:justify-between items-center text-lg font-semibold mt-10">
            <div className="flex w-full justify-between sm:hidden">
              <span>₹ {price}</span>
              <span className="text-gray-500 text-sm">{duration}</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span>₹ {price}</span>
              <span className="text-gray-500 text-sm">{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
