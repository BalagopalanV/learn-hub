import React from "react";
import ContactCard from "@/component/contactcard/ContactCard";
import TitleLabel from "@/component/titlelabel/TitleLabel";
import iconlocation from "../../../assets/icon/ic_location.svg";
import iconemail from "../../../assets/icon/ic_email.svg";
import iconphone from "../../../assets/icon/ic_phone.svg";
const ContactInfo = () => {
  return (
    <section className="w-full h-auto md:h-[100vh]  justify-center items-center">
      <div className="flex flex-col justify-center gap-y-[3rem] items-center h-auto">
        <div className=" px-4 ">
          <TitleLabel
            label="Contact info"
            title="We are always happy to assist you"
            labelCenter
          />
        </div>

        <div className="flex flex-col md:flex-row gap-[2rem] justify-between items-center w-full h-full px-4 md:px-20 gap-y-4">
          <ContactCard
            icon={iconphone}
            title="Call Us"
            description="Our team is here to assist with your queries."
            contact="+91 9876543210"
          />
          <ContactCard
            icon={iconemail}
            title="Support & Assistance"
            description="Need help with our programs? Get in touch."
            contact="contact@bytecompass.tech"
          />
          <ContactCard
            icon={iconlocation}
            title="Visit Us"
            description="Drop by our office to meet our team."
            contact="Madurai, Tamil Nadu, India"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
