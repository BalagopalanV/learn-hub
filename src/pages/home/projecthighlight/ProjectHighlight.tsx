"use client";
import React from "react";
import ProjectCard from "@/component/projectcard/ProjectCard";
import { poppins } from "../../../../public/fonts/fonts";
import iconLed from "../../../assets/icon/ic_led_tran.svg";
import iconWorldPrj from "../../../assets/icon/ic_world_prj.svg";
import iconleaning from "../../../assets/icon/ic_learning.svg";
import iconSupport from "../../../assets/icon/ic_car_sup.svg";

const ProjectHighlight = () => {
  const projects = [
    {
      title: "Expert-Led training",
      subtitle: "Learn from experienced IT professionals.",
      image: iconLed,
    },
    {
      title: "Flexible learning",
      subtitle:
        "Enroll online and attend in-person sessions at our training centers.",
      image: iconleaning,
    },
    {
      title: "Real world projects",
      subtitle: "Work on hands-on assignments to build your portfolio.",
      image: iconWorldPrj,
    },
    {
      title: "Career support",
      subtitle: "Get guidance, resume building, and interview preparation.",
      image: iconSupport,
    },
  ];

  return (
    <section className="max-w-[1700px] mx-auto px-8 my-[3rem]">
      <h5
        className={`${poppins.className} font-regular text-[2.5rem] text-center text-[#242424] mt-[6rem]  md:mt-[8rem] font-semibold my-4`}
      >
        What Sets Us Apart
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-0 sm:px-[3rem] mt-[4rem]">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectHighlight;
