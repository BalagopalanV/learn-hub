"use client";
import Accordion from "@/component/accordion/Accordion";
import React, { useState } from "react";

const Faq = () => {
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
  ];
  return (
    <section className="max-w-[1700px] mx-auto h-auto md:h-[100vh] w-full flex flex-col justify-center items-center my-[2rem] p-4 ">
      <div className="w-full w-[95%] bg-[#F2F0F0] rounded-[15px] border-[1px] border-[#8D8D8D] p-4 text-center overflow-y-auto">
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            content={item.content}
            isOpen={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} // Close if clicked again
            bgColor={"#E7E7E7"}
            weekTextColor={"#E7E7E7"}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;
