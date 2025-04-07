import React from "react";
import EnrollmentCard from "@/component/enrollmentcard/EnrollmentCard";
import iconDimond from "../../../assets/icon/ic_enroll_list.svg";
import iconUparrow from "../../../assets/icon/ic_list_up_arrow.svg";

const WhoShouldEnroll = () => {
  const enrollmentDatax = {
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
    icon: iconDimond.src,
    backgroundColor: "#F2F0F0",
    borderColor: "#D1D0D0",
  };

  const enrollmentDatay = {
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
    icon: iconUparrow.src,
    backgroundColor: "#E4F6FF",
    borderColor: "#70B0D0",
  };

  return (
    <section className="max-w-[1700px] mx-auto p-[10px] font-sans font-extrabold h-auto md:h-[100vh] w-full flex items-center">
      <div className="w-full h-[80%]">
        <div className="flex-[1] h-full flex flex-col md:flex-row gap-6">
          <div className="flex-[0.5] felx felx-row">
            <EnrollmentCard {...enrollmentDatax} />
          </div>
          <div className="flex-[0.5] felx felx-row">
            <EnrollmentCard {...enrollmentDatay} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldEnroll;
