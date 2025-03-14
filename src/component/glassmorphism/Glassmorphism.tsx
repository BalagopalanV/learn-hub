import React from "react";
import Image, { StaticImageData } from "next/image";

interface GlassmorphismProps {
  label: string;
  image: StaticImageData;
  textColor?: string; // Allows custom text color
  gradientColors?: string; // Custom linear gradient
  borderColor?: string; // Custom border color
}

const Glassmorphism: React.FC<GlassmorphismProps> = ({
  label,
  image,
  textColor = "text-white",
  gradientColors = "from-white/20 to-white/10", // Default gradient
  borderColor = "border-white/30", // Default border
}) => {
  return (
    // <div
    //   className={`bg-gradient-to-r ${gradientColors} border ${borderColor} rounded-2xl shadow-lg backdrop-blur-[105px] flex items-center gap-2 px-4 py-2 w-fit`}
    // >
    //   <span className={`${textColor} text-sm font-medium`}>{label}</span>
    //   <div className="w-5 h-5">
    //     <Image src={image} alt={label} className="object-contain" />
    //   </div>
    // </div>

    <div className="w-[300px] h-[60px] rounded-full bg-gradient-to-r from-purple-500 to-blue-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg shadow-lg"></div>
    </div>
  );
};

export default Glassmorphism;
