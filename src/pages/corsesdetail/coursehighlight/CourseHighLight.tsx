import FeatureCard from "@/component/featurecard/FeatureCard";
import React from "react";
import ic_career from "../../../assets/icon/ic_career_sup.svg";
import ic_live from "../../../assets/icon/ic_live_code.svg";
import ic_certification from "../../../assets/icon/ic_certification.svg";
import ic_portfolio from "../../../assets/icon/ic_portfio_bu.svg";
import ic_mentorship from "../../../assets/icon/ic_mentor.svg";

import { poppins } from "../../../../public/fonts/fonts";

const CourseHighLight = () => {
  const features = [
    {
      title: "Career Support",
      description: "Resume building & interview preparation.",
      icon: ic_career,
      color: "#1E9023",
    },
    {
      title: "Live Code-Along Sessions",
      description: "Interactive coding with instructors.",
      icon: ic_live,
      color: "#4E5A7F",
      position: "top-right",
    },
    {
      title: "Certification",
      description: "Earn a recognized credential upon course completion.",
      icon: ic_certification,
      color: "#9B60E8",
      position: "center",
    },
    {
      title: "Portfolio Building",
      description: "Showcase your work to potential employers.",
      icon: ic_portfolio,
      color: "#9B60E8",
      position: "bottom-left",
    },
    {
      title: "MENTORSHIP",
      description: "Receive personalized feedback from seasoned professionals.",
      icon: ic_mentorship,
      color: "#000000",
      position: "bottom-right",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto p-4 font-sans h-auto">
      <div className="max-w-7xl mx-auto p-4 font-sans rounded-[20px] bg-[#ECEEFF] h-auto">
        <h5
          className={`${poppins.className} text-center font-medium text-[#1F2131] text-[1rem] md:text-[1.7rem] my-6 md:my-12`}
        >
          Course highlights
        </h5>
        <div className="flex flex-col h-auto gap-2 sm:grid sm:grid-cols-8 sm:grid-rows-4 sm:gap-0">
          {/* 12 */}
          <div className=" sm:col-span-3 sm:row-span-2 sm:col-start-1 sm:row-start-1">
            <FeatureCard
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
              iconPosition="left"
              textColor={features[0].color}
            />
          </div>

          {/* 18 */}
          <div className=" sm:col-span-3 sm:row-span-2 sm:col-start-6 sm:row-start-1">
            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              icon={features[1].icon}
              iconPosition="right"
              textColor={features[1].color}
            />
          </div>

          {/* 7 */}
          <div className="sm:col-span-2 sm:row-span-2 sm:col-start-4 sm:row-start-2">
            <FeatureCard
              title={features[2].title}
              description={features[2].description}
              icon={features[2].icon}
              textColor={features[2].color}
              iconPosition="center"
            />
          </div>

          {/* 6 */}
          <div className=" flex items-end sm:col-span-3 sm:row-span-2 sm:col-start-1 sm:row-start-3">
            <FeatureCard
              title={features[3].title}
              description={features[3].description}
              icon={features[3].icon}
              textColor={features[3].color}
              iconPosition="left"
            />
          </div>

          {/* 19 */}
          <div className=" flex items-end sm:col-span-3 sm:row-span-2 sm:col-start-6 sm:row-start-3">
            <FeatureCard
              title={features[4].title}
              description={features[4].description}
              icon={features[4].icon}
              textColor={features[4].color}
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighLight;
