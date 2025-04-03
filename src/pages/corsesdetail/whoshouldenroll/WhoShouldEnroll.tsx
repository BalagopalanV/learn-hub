import EnrollmentCard from "@/component/enrollmentcard/EnrollmentCard";
import FeatureCard from "@/component/featurecard/FeatureCard";
import React from "react";

const WhoShouldEnroll = () => {
  const enrollmentData = {
    title: "Who Should Enroll?",
    descriptions: [
      {
        highlight: "Beginners",
        text: "to Get started with coding from scratch.",
      },
      {
        highlight: "Designers",
        text: "to Bring life to their designs with interactive UIs. ",
      },
      {
        highlight: "Developers",
        text: "to Upgrade their front-end skills with modern frameworks.",
      },
    ],
    icon: "✨",
    backgroundColor: "#F2F0F0",
    borderColor: "#D1D0D0",
  };

  return (
    <section className="max-w-[1700px] mx-auto p-[10px] font-sans font-extrabold h-[100vh] w-full flex items-center">
      <div className="w-full h-[80%]">
        <div className="flex-[1] h-full flex flex-row gap-6">
          <div className="flex-[0.5] felx felx-row">
            <EnrollmentCard {...enrollmentData} />
          </div>
          <div className="flex-[0.5] felx felx-row">
            <EnrollmentCard {...enrollmentData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldEnroll;
