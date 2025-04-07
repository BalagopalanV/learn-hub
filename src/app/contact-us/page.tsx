import React from "react";
import Landingsection from "@/pages/contactus/landingsection/Landingsection";
import ContactInfo from "@/pages/contactus/contactinfo/ContactInfo";
import ContactFaq from "@/pages/contactus/contactfaq/ContactFaq";

const page = () => {
  return (
    <div className="bg-[#FDFDFD] rounded-b-[30px] py-[0.4rem]">
      <Landingsection />
      <ContactInfo />
      <ContactFaq />
    </div>
  );
};

export default page;
