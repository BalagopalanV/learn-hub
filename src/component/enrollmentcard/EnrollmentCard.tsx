import React from "react";
import { poppins } from "../../../public/fonts/fonts";
import Image from "next/image";
import iconGreen from "../../assets/icon/ic_clock_green.svg";
interface EnrollmentCardProps {
  title: string;
  descriptions: { highlight: string; text: string }[];
  icon: string;
  backgroundColor?: any;
  borderColor?: any;
  customize?: any;
  flexIcon?: any;
  disColor?: any;
  hightlightColor?: any;
}

const EnrollmentCard: React.FC<EnrollmentCardProps> = ({
  title,
  descriptions,
  icon,
  backgroundColor = "#fff",
  borderColor = "#F2F0F0",
  customize,
  flexIcon,
  hightlightColor,
  disColor,
}) => {
  return (
    <div
      className="p-6 bg-white rounded-lg shadow-xs w-full h-full"
      style={{
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      {/* Icon & Title */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <h2 className="text-[1.7rem] font-semibold text-[#242424]">
          <span className={`${poppins.className} text-[#2C2C2C]`}>{title}</span>
        </h2>
        {flexIcon && (
          <div className="flex items-center bg-[#DAF2D8] rounded-[8px] py-1 gap-1 px-3 ">
            <Image
              src={iconGreen}
              alt="Icon"
              width={100}
              height={100}
              className="w-7 h-full"
            />
            <h2
              className={` ${poppins.className} text-[0.8rem] w-fit font-semibold text-[#476545]`}
            >
              1.5 - 2 hrs/day
            </h2>
          </div>
        )}
      </div>

      {/* Descriptions List */}
      <ul className="list-disc text-gray-700 md:space-y-2 pl-0 md:pl-5">
        {descriptions.map((desc, index) => (
          <li key={index} className="flex items-start gap-2 py-3">
            {icon && (
              <Image
                src={icon}
                alt="Icon"
                width={100}
                height={100}
                className="w-10 h-full"
              />
            )}

            <div className="">
              <span
                className={`${poppins.className} font-semibold text-[#2C2C2C`}
                style={{
                  fontSize: customize ? "1rem" : "1.5rem",
                  color: hightlightColor,
                }}
              >
                {desc.highlight}
              </span>{" "}
              <span
                className={`${poppins.className} font-medium `}
                style={{
                  fontSize: customize ? "0.9rem" : "1.2rem",
                  color: disColor,
                }}
              >
                {desc.text}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollmentCard;
