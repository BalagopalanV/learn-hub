import React from "react";
import Image, { StaticImageData } from "next/image";
import { poppins } from "../../../public/fonts/fonts";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData | string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <div
      className={
        "relative bg-gray-100 rounded-[25px] p-4 flex items-start justify-between overflow-hidden min-h-[140px]"
      }
    >
      <div className="z-10">
        <h2
          className={`${poppins.className} text-[1.2rem] mb-1 md:text-[1.6rem] font-bold text-black`}
        >
          {title}
        </h2>
        <p
          className={`${poppins.className} md:w-[70%] text-gray-600 md:text-[0.8rem]`}
        >
          {subtitle}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 w-[80px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="object-contain w-full h-full"
          sizes="(max-width: 768px) 80px, 100px"
          priority
        />
      </div>
    </div>
  );
};

export default ProjectCard;
