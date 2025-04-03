import React from "react";
import { poppins } from "../../../public/fonts/fonts";

interface EnrollmentCardProps {
  title: string;
  descriptions: { highlight: string; text: string }[];
  icon: string;
  backgroundColor?: any;
  borderColor?: any;
}

const EnrollmentCard: React.FC<EnrollmentCardProps> = ({
  title,
  descriptions,
  icon,
  backgroundColor = "#fff", // Default background color
  borderColor = "#F2F0F0", // Default border color
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
        {true && (
          <div className="flex items-center bg-amber-100 py-1 gap-x-4 px-3 ">
            <span className="text-l">{icon}</span>
            <h2 className="text-[1rem] w-fit font-semibold text-[#242424]">
              1.5 - 2 hrs/day
            </h2>
          </div>
        )}
      </div>

      {/* Descriptions List */}
      <ul className="list-disc text-gray-700 space-y-2 pl-5">
        {descriptions.map((desc, index) => (
          <li key={index} className="flex items-start gap-2 py-3">
            <span className="text-2xl">{icon}</span>
            <div className="">
              <span
                className={`${poppins.className} font-semibold text-[1.5rem] text-[#2C2C2C`}
              >
                {desc.highlight}
              </span>{" "}
              <span
                className={`${poppins.className} font-medium text-[1.1rem]`}
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
