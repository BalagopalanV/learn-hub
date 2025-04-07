"use client";
import Accordion from "@/component/accordion/Accordion";
import React, { ReactNode, useState } from "react";
import { poppins } from "../../../../public/fonts/fonts";
import EnrollmentCard from "@/component/enrollmentcard/EnrollmentCard";
import iconDimond from "../../../assets/icon/ic_list_crytal.svg";

const CourseInfo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
    {
      title: "Week 1",
      subtitle: "Web Development Fundamentals",
      content: [
        { text: "Introduction to HTML", icon: "📄" },
        { text: "CSS Basics", icon: "🎨" },
        { text: "Understanding the DOM", icon: "🌐" },
      ],
    },
  ];

  const enrollx = {
    title: "Schedules",
    descriptions: [
      {
        highlight: "Monday - Friday ",
        text: "interactive classroom sessions, hands-on coding, and guided assignments.",
      },
      {
        highlight: "Saturday ",
        text: "Project work, revision, and one-on-one mentor interactions. ",
      },
    ],
    icon: iconDimond,
    backgroundColor: "#EFFDEE",
    // borderColor: "#D1D0D0",
  };
  const enrolly = {
    title: "Learning mode",
    descriptions: [
      {
        highlight: "",
        text: "This is a fully In-Person Classroom training program designed to provide an immersive and hands-on learning experience—just like the old times!",
      },
    ],
    icon: "",
    backgroundColor: "#FEECF7",
    // borderColor: "",
  };
  return (
    <section className="h-auto md:h-[100vh] w-full p-5">
      <div className="flex h-full flex-col md:flex-row justify-between">
        {/* Left Column */}

        <div className="flex-[0.49] h-full bg-[#F9F8F1] p-4 rounded-[20px]">
          <h3
            className={`${poppins.className} text-[1.8rem] font-medium py-[1px]`}
          >
            Course Breakdown
          </h3>
          <div className="h-[95%] overflow-y-auto ">
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? -1 : index)
                } // Close if clicked again
                bgColor={"F1EFE3"}
                weekTextColor={"#989376"}
                isWeek
              />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-[0.49] rounded-lg py-4 md:py-0">
          <div className="flex h-full flex-col min-h-0 gap-4">
            <div className=" flex-[0.5] rounded-[20px] overflow-hidden">
              <EnrollmentCard
                {...enrollx}
                customize
                flexIcon
                hightlightColor={"#1C3542"}
                disColor={"#586369"}
              />
            </div>
            <div className="flex-[0.5] rounded-[20px] overflow-hidden">
              <EnrollmentCard {...enrolly} customize />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
