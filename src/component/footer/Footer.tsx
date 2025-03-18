import React from "react";
import Image from "next/image";
import companyLogo from "../../assets/icon/ic_foot_company.svg";
import phoneIcon from "../../assets/icon/ic_phn.svg";
import loctionIcon from "../../assets/icon/ic_loc.svg";
import mailIcon from "../../assets/icon/ic_mail.svg";
import DribbleIcon from "../../assets/icon/ic_dribbble.svg";
import xIcon from "../../assets/icon/ic_x.svg";
import instaIcon from "../../assets/icon/ic_insta.svg";
import linkIcon from "../../assets/icon/ic_linked.svg";

import { poppins } from "../../../public/fonts/fonts";
const Footer = () => {
  return (
    <footer
      className={`${poppins.className}  bg-[#755EFF] text-white py-10 px-6 md:px-16`}
    >
      <div className="container mx-auto mb-[2rem] md:my-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-[15rem] md:w-[15rem] flex items-center gap-4 mb-4 md:mb-0">
          <Image src={companyLogo} alt="Bytecompass Logo" />
        </div>

        <nav className="flex flex-col md:flex-row gap-[2rem] md:gap-8 text-white text-lg text-center">
          <a href="#" className="hover:opacity-80 transition">
            About us
          </a>
          <a href="#" className="hover:opacity-80 transition">
            Courses
          </a>
          <a href="#" className="hover:opacity-80 transition">
            Contact us
          </a>
        </nav>
      </div>

      <div className="container my-[0rem] md:my-[4rem]  flex mx-auto flex-col-reverse md:flex-row justify-between w-full items-center gap-[2rem]">
        <div className="w-full  md:w-auto flex items-center flex-col md:flex-row gap-[2rem] md:gap-[4rem] order-2 md:order-1">
          <div className="flex items-center gap-2 md:gap-1 md:flex-col md:items-start order-2 md:order-none">
            <Image src={phoneIcon} alt="phoneicon" width={30} height={30} />
            <span className="text-center md:text-left">+91 9876543210</span>
          </div>

          <div className="flex items-center gap-2 md:gap-1 md:flex-col md:items-start order-1 md:order-none">
            <Image src={mailIcon} alt="mailicon" width={30} height={30} />
            <span className="text-center md:text-left">
              contact@bytecompass.tech
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-1 md:flex-col md:items-end order-1 md:order-2">
            <Image src={loctionIcon} alt="locicon" width={30} height={30} />
            <span className="text-center md:text-right">
              Madurai, Tamil Nadu, India
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-1 md:flex-col md:items-start order-1 md:order-2">
          <div className="w-1 h-10" />
          <span className="text-center md:text-right">Privacy policy</span>
        </div>
      </div>

      {/* <div className="my-[2rem] md:my-[1rem] container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <div className="flex items-center items-start">Privacy policy</div>
        <div className="flex items-center gap-[1rem] items-start">
          <Image src={instaIcon} alt="locicon" width={30} height={30} />{" "}
          <Image src={linkIcon} alt="locicon" width={30} height={30} />
          <Image src={DribbleIcon} alt="locicon" width={30} height={30} />
          <Image src={xIcon} alt="locicon" width={30} height={30} />
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
