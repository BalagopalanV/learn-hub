import React from "react";
import CourseDescription from "@/pages/home/coursedescription.tsx/CourseDescription";
import Welcome from "@/pages/home/landing/Welcome";
import InfoCard from "@/component/infoCard/InfoCard";
import demoImage from "../../src/assets/images/img_demo.png";
import CourseCard from "@/component/coursecard/CourseCard";
import Opportunities from "@/pages/home/opportunities/Opportunities";
import CatchUpTrend from "@/pages/home/catchuptrend/CatchUpTrend";
import ProjectHighlight from "@/pages/home/projecthighlight/ProjectHighlight";
const page = () => {
  return (
    <div className="bg-[#FDFDFD] rounded-b-[30px] py-[0.4rem]">
      <Welcome />
      <CourseDescription />
      <Opportunities />
      <CatchUpTrend />
      <ProjectHighlight />
    </div>
  );
};

export default page;
