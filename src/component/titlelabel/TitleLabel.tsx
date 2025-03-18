import React from "react";
import { poppins } from "../../../public/fonts/fonts";

interface TitleLabelProps {
  label: string;
  title: string;
}

const TitleLabel: React.FC<TitleLabelProps> = ({ label, title }) => {
  return (
    <div className="py-4">
      <span
        className={`${poppins.className} font-semibold text-[#999999] text-[1rem] md:text-[1rem]`}
      >
        {label}
      </span>
      <h2
        className={`${poppins.className} font-medium text-[1.4rem] md:text-[2.3rem] py-4`}
      >
        {title}
      </h2>
    </div>
  );
};

export default TitleLabel;
