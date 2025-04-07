import React from "react";
import Image from "next/image";
import { poppins } from "../../../public/fonts/fonts";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  iconPosition?: "left" | "right" | "center";
  textColor?: string; //
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconPosition = "left",
  textColor = "text-purple-600", // Default color
}) => {
  return (
    <div
      className={`flex items-center rounded-lg h-fit w-full  
      ${iconPosition === "center" ? "flex-col text-center" : "flex-row"}
      ${iconPosition === "right" ? "flex-row-reverse" : ""}`}
    >
      <div className="flex-shrink-0 w-[150px] h-full rounded-full flex items-center justify-center">
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4">
        <h3
          className={`${poppins.className} uppercase text-[1.5rem] font-bold `}
          style={{
            ...(iconPosition === "right" ? { textAlign: "right" } : {}),
            color: textColor,
          }}
        >
          {title}
        </h3>
        <p
          className={`${poppins.className} font-light text-[0.8rem] text-[#111]`}
          style={iconPosition === "right" ? { textAlign: "right" } : {}}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
