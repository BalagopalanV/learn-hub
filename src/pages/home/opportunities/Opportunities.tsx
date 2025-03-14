import InfoCard from "@/component/infoCard/InfoCard";
import TitleLabel from "@/component/titlelabel/TitleLabel";
import React from "react";
import demoImage from "../../../assets/images/img_demo.png";

const Opportunities = () => {
  return (
    <section className="max-w-[1700px] mx-auto px-5 md:px-8 my-[3rem]">
      <TitleLabel label="Categories" title="Explore Vast Opportunities" />
      <div className="flex flex-col sm:flex-row gap-3 my-4 ">
        <div className="flex-1 sm:flex-[0.6]  pb-2">
          <InfoCard
            imageUrl={demoImage}
            title="Web Development"
            description="Master frontend, backend, and full-stack development to build dynamic and scalable websites."
            link="/data-science"
          />
        </div>
        <div className="flex-1 sm:flex-[0.4] pb-2">
          <InfoCard
            imageUrl={demoImage}
            title="Data Science & AI"
            description="Learn Python, machine learning, and deep learning to analyze data and create AI-driven solutions."
            link="/cybersecurity"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 ">
        <div className="flex-1 sm:flex-[0.49] pb-2">
          <InfoCard
            imageUrl={demoImage}
            title="Cloud Computing"
            description="Explore AWS, Azure, and DevOps to deploy and manage scalable cloud infrastructure."
            link="/fullstack"
          />
        </div>
        <div className="flex-1 sm:flex-[0.6] pb-2">
          <InfoCard
            imageUrl={demoImage}
            title="UI/UX Design"
            description="Design intuitive user experiences with Figma, prototyping, and user research techniques."
            link="/cloud"
          />
        </div>
      </div>

      <div className="flex justify-center my-4 ">
        <div className="flex-1 sm:w-auto pb-2">
          <InfoCard
            imageUrl={demoImage}
            title="Mobile App Development"
            description="Build powerful mobile apps using Flutter, React Native, and Android/iOS development. "
            link="/blockchain"
          />
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
