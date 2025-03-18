import CommittedToExcellence from "@/pages/aboutus/committedtoexcellence/CommittedToExcellence";
import SkillForge from "@/pages/aboutus/skillForge/SkillForge";
import StartSuccessHero from "@/pages/aboutus/startsuccesshero/StartSuccessHero";
import TechElevate from "@/pages/aboutus/techelevate/TechElevate";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FDFDFD] rounded-b-[30px] py-[0.4rem]">
      <SkillForge />
      <TechElevate />
      <CommittedToExcellence />
      <StartSuccessHero />
    </div>
  );
};

export default page;
