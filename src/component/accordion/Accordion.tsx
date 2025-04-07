"use client";
import Image from "next/image";
import arrowDownIcon from "../../assets/icon/ic_option_down_arrow.svg";
import { poppins } from "../../../public/fonts/fonts";

type AccordionProps = {
  title?: string;
  subtitle: string;
  content?: any;
  isOpen: boolean;
  onClick: () => void;
  bgColor?: any;
  weekTextColor?: any;
  isWeek?: any;
  contactfaq?: any;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle,
  content,
  isOpen,
  onClick,
  bgColor,
  weekTextColor,
  isWeek,
  contactfaq,
}) => {
  return (
    <div className="w-full my-4 mx-auto">
      <div
        className="flex items-center p-4  rounded-lg cursor-pointer"
        onClick={onClick}
        style={{
          backgroundColor: bgColor ? `${bgColor}` : "transparent",
        }}
      >
        {isWeek && (
          <span
            className="text-gray-500"
            style={{
              color: weekTextColor ? weekTextColor : "#989376",
              paddingInlineEnd: "1.5rem",
            }}
          >
            {title}
          </span>
        )}

        <span className="font-semibold">{subtitle}</span>
        <div className=" flex items-end justify-between ml-auto">
          <Image
            src={arrowDownIcon}
            alt=""
            className={`h-5 w-5 text-gray-500 ml-2 transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="p-4 border-gray-200 rounded-b-lg"
          style={{
            backgroundColor: bgColor ? `${bgColor}` : "transparent",
          }}
        >
          {contactfaq ? (
            <>
              {content?.map((item: any, index: number) => (
                <p
                  key={index}
                  className={`${poppins.className} text-[#848484]`}
                >
                  {item.text}
                </p>
              ))}
              <hr
                className="w-[80%] mt-6 mx-auto"
                style={{ borderColor: "#EFEFEF", borderWidth: "1px" }}
              />
            </>
          ) : (
            <ul className="list-inside text-gray-700">
              {content?.map((item: any, index: number) => (
                <li
                  key={index}
                  className="flex items-center gap-2"
                  style={{
                    paddingInlineStart: isWeek ? "4.5rem" : "0rem",
                  }}
                >
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
