import CourseHighLight from "@/pages/corsesdetail/coursehighlight/CourseHighLight";
import CourseInfo from "@/pages/corsesdetail/courseinfo/CourseInfo";
import CoursesDetails from "@/pages/corsesdetail/coursesdetails/CoursesDetails";
import Faq from "@/pages/corsesdetail/faq/Faq";
import WhoShouldEnroll from "@/pages/corsesdetail/whoshouldenroll/WhoShouldEnroll";
import ProjectHighlight from "@/pages/home/projecthighlight/ProjectHighlight";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FDFDFD] py-[0.4rem]">
      <CoursesDetails />
      <WhoShouldEnroll />
      <CourseHighLight />
      <CourseInfo />
      <Faq />
      <ProjectHighlight />
    </div>
  );
};

export default page;
