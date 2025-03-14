"use client";
import React, { useState } from "react";
import TitleLabel from "@/component/titlelabel/TitleLabel";
import CourseCard from "@/component/coursecard/CourseCard";
import { poppins } from "../../../../public/fonts/fonts";

const CatchUpTrend = () => {
  const [showAll, setShowAll] = useState(false);
  const courses = [
    {
      imageUrl: "/assets/course-placeholder.png",
      level: "Beginner",
      title: "Full-Stack Web Development Mastery",
      description:
        "Master the MERN Stack (MongoDB, Express.js, React, Node.js) and build dynamic web applications from scratch.",
      price: "1,200",
      duration: "6 Weeks",
      link: "/full-stack-course",
    },
    {
      imageUrl: "/assets/course-placeholder.png",
      level: "Intermediate",
      title: "UI/UX Design",
      description: "Learn UI/UX design principles using Figma & Adobe XD.",
      price: "1,500",
      duration: "5 Weeks",
      link: "/ui-ux-course",
    },
    {
      imageUrl: "/assets/course-placeholder.png",
      level: "Advanced",
      title: "AI & Machine Learning",
      description: "Build AI models using Python, TensorFlow, and OpenAI APIs.",
      price: "2,000",
      duration: "8 Weeks",
      link: "/ai-ml-course",
    },
    {
      imageUrl: "/assets/course-placeholder.png",
      level: "Advanced",
      title: "Cybersecurity Essentials",
      description:
        "Learn ethical hacking, network security, and threat analysis.",
      price: "1,800",
      duration: "7 Weeks",
      link: "/cybersecurity-course",
    },
    {
      imageUrl: "/assets/course-placeholder.png",
      level: "Intermediate",
      title: "Cloud Computing",
      description:
        "Master AWS, Azure, and Google Cloud to deploy scalable applications.",
      price: "2,100",
      duration: "6 Weeks",
      link: "/cloud-computing-course",
    },
  ];

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <section className="max-w-[1700px] mx-auto px-5 md:px-8 my-[3rem]">
      <TitleLabel label="Courses" title="Catch Up with the Trend 🔥" />

      <div>
        {visibleCourses.map((course, index) => (
          <React.Fragment key={index}>
            <CourseCard key={index} {...course} />
            <div className="w-[50%] m-auto ">
              <hr className="text-[#EFEFEF]"></hr>
            </div>
          </React.Fragment>
        ))}

        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className={`${poppins.className} px-5 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition 
             cursor-pointer active:opacity-50`}
          >
            {showAll ? "See less Courses" : "See more Courses"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CatchUpTrend;
