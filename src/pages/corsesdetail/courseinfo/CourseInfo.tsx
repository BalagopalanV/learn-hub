"use client";
import Accordion from "@/component/accordion/Accordion";
import React, { ReactNode, useState } from "react";

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
  ];
  return (
    <section className="h-screen w-full p-5">
      <div className="flex h-full flex-row justify-between">
        {/* Left Column */}

        <div className="flex-[0.49] h-full bg-blue-100 p-4 rounded-lg">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
              isOpen={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} // Close if clicked again
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex-[0.49] bg-yellow-100 rounded-lg">
          <div className="flex h-full flex-col">
            <div className="bg-red-100 p-4 m-2 flex-[0.5] rounded-lg">Top</div>
            <div className="bg-orange-100 p-4 m-2 flex-[0.5] rounded-lg">
              Bottom
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;
