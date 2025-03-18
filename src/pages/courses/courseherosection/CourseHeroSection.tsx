import Image from "next/image";
import lightningIcon from "../../../assets/icon/ic_hunter.svg";
import { poppins } from "../../../../public/fonts/fonts";

const CourseHeroSection = () => {
  return (
    <section className="flex h-[100vh] bg-[#FDFDFD] flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 space-y-4">
      <div className="h-[90%] md:h-[80%] flex flex-col justify-center md:justify-end items-center ">
        <h2
          className={` ${poppins.className} text-[2rem] py-[1rem]  md:text-[3.5rem] font-bold bg-clip-text text-transparent  bg-gradient-to-r from-[#7C54FF] to-[#A6B1FE]`}
        >
          The Course That Changes <br className="hidden sm:block" />
          Everything Is Waiting For You!
        </h2>

        <div className="w-fit h-[15%] md:h-[20%] mt-[2rem]">
          <Image
            src={lightningIcon}
            alt="Lightning Icon"
            className="w-[100%] h-[100%] object-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;
