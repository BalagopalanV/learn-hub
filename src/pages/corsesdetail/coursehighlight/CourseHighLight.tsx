import FeatureCard from "@/component/featurecard/FeatureCard";
import React from "react";
import ic_career from "../../../assets/icon/ic_career_sup.svg";

const CourseHighLight = () => {
  const features = [
    {
      title: "Career Support",
      description: "Build your portfolio to attract opportunities.",
      icon: ic_career,
      color: "bg-blue-600",
    },
    {
      title: "Skill Development",
      description: "Access resources to enhance your skills.",
      icon: ic_career,

      color: "bg-green-500",
      position: "top-right",
    },
    {
      title: "Premium Features",
      description: "Access our exclusive premium content.",
      icon: ic_career,

      color: "bg-purple-600",
      position: "center",
    },
    {
      title: "Project Showcase",
      description: "Display your work and get valuable feedback.",
      icon: ic_career,

      color: "bg-yellow-500",
      position: "bottom-left",
    },
    {
      title: "Networking",
      description: "Connect with industry professionals.",
      icon: ic_career,

      color: "bg-red-500",
      position: "bottom-right",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto p-4 font-sans">
      <div className="w-full bg-indigo-50 rounded-3xl px-4 py-6 md:px-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Top row */}
          <div className="h-full">
            <FeatureCard
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
              iconPosition="left"
            />
          </div>

          <div className="h-full">
            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              icon={features[1].icon}
              iconPosition="right"
            />
          </div>

          {/* Middle row - spans 2 columns */}
          <div className="col-span-1 md:col-span-2 my-2 md:my-4 relative">
            <FeatureCard
              title={features[2].title}
              description={features[2].description}
              icon={features[2].icon}
              iconPosition="center"
            />
          </div>

          {/* Bottom row */}
          <div className="h-full">
            <FeatureCard
              title={features[3].title}
              description={features[3].description}
              icon={features[3].icon}
              iconPosition="left"
            />
          </div>

          <div className="h-full">
            <FeatureCard
              title={features[4].title}
              description={features[4].description}
              icon={features[4].icon}
              iconPosition="right"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHighLight;
