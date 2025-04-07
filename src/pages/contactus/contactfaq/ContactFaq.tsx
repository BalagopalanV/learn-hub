"use client";
import React, { ReactNode, useState } from "react";
import Accordion from "@/component/accordion/Accordion";
import TitleLabel from "@/component/titlelabel/TitleLabel";

const ContactFaq = () => {
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
      backgroundColor: "#EFFDEE",
    },
  ];
  return (
    <section className="h-auto md:h-[100vh] w-full p-5 ">
      <div className="flex flex-col justify-center gap-y-[3rem] items-center h-auto">
        <div className="px-4 ">
          <TitleLabel
            label="Contact info"
            title="We are always happy to assist you"
            labelCenter
          />
        </div>
        <div className="h-[95%] w-[85%] overflow-y-auto ">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              content={item.content}
              isOpen={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)} // Close if clicked again
              bgColor={"F1EFE3"}
              weekTextColor={"#989376"}
              contactfaq
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
