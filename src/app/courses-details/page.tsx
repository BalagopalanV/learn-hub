import CourseHighLight from "@/pages/corsesdetail/coursehighlight/CourseHighLight";
import CourseInfo from "@/pages/corsesdetail/courseinfo/CourseInfo";
import CoursesDetails from "@/pages/corsesdetail/coursesdetails/CoursesDetails";
import WhoShouldEnroll from "@/pages/corsesdetail/whoshouldenroll/WhoShouldEnroll";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#FDFDFD] py-[0.4rem]">
      <CoursesDetails />
      <WhoShouldEnroll />
      <CourseHighLight />
      <CourseInfo />
    </div>
  );
};

export default page;
