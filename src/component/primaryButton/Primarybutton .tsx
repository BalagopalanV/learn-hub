import Image from "next/image";
import React from "react";
import arrowIcon from "../../assets/icon/ic_arrow-right.svg";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  icon?: any;
}

const Primarybutton: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  icon,
}) => {
  return (
    <div
      className={`flex cursor-pointer px-6 py-[0.8rem] md:py-[0.7rem] rounded-full hover:opacity-80 transition ${className}`}
      onClick={onClick}
    >
      <label className="font-gilroy font-semibold ">{label}</label>
      {icon && (
        <Image
          src={arrowIcon}
          alt=""
          className={`h-5 w-5 text-gray-500 ml-2 transition-transform duration-300 ease-in-out `}
        />
      )}
    </div>
  );
};

export default Primarybutton;
