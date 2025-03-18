import CourseCategories from "@/pages/courses/coursecategories/CourseCategories";
import CourseHeroSection from "@/pages/courses/courseherosection/CourseHeroSection";
import Welcome from "@/pages/home/landing/Welcome";
import ProjectHighlight from "@/pages/home/projecthighlight/ProjectHighlight";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FDFDFD] rounded-b-[30px] py-[0.4rem]">
      <CourseHeroSection />
      <CourseCategories />
      <ProjectHighlight />
    </div>
  );
};

export default page;
