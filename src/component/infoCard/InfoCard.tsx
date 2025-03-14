import React from "react";
import Image from "next/image";
import iconArrow from "../../assets/icon/ic_arrow.svg";
import { poppins } from "../../../public/fonts/fonts";

interface InfoCardCardProps {
  imageUrl: any;
  title: string;
  description: string;
  link?: string;
}

const InfoCard: React.FC<InfoCardCardProps> = ({
  imageUrl,
  title,
  description,
  link = "#",
}) => {
  return (
    <div className="flex flex-col justify-center items-center relative w-ful  h-[400px] rounded-[25px] bg-gray-200 shadow-lg overflow-hidden">
      <div className="w-full h-full relative bg-[#E5E5E5]">
        {/* <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="absolute bottom-3 w-[95%] bg-white p-2 px-6 rounded-[25px] md:rounded-[20px] flex items-center justify-between">
        <div className="w-[85%]">
          <h3
            className={`${poppins.className} font-medium text-[#000000] text-[1.2rem] md:text-[1.1rem]`}
          >
            {title}
          </h3>
          <p
            className={`${poppins.className} text-[#8D8D8D] text-[0.9rem]  md:text-[0.8rem]`}
          >
            {description}
          </p>
        </div>
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition">
          <a href={link}>
            <Image src={iconArrow} alt="iconArrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
