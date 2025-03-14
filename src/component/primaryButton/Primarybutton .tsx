import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const Primarybutton: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div
      className={`inline-block cursor-pointer px-6 py-[0.8rem] md:py-[0.7rem] rounded-full hover:opacity-80 transition ${className}`}
      onClick={onClick}
    >
      <label className="font-gilroy font-semibold ">{label}</label>
    </div>
  );
};

export default Primarybutton;
