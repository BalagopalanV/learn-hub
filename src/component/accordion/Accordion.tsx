"use client";
import Image from "next/image";
import arrowDownIcon from "../../assets/icon/ic_option_down_arrow.svg";

type AccordionProps = {
  title: string;
  subtitle: string;
  content: any;
  isOpen: boolean;
  onClick: () => void;
};

const Accordion: React.FC<AccordionProps> = ({
  title,
  subtitle,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="w-full my-4 mx-auto">
      <div
        className="flex items-center justify-between p-4 bg-gray-100 rounded-lg cursor-pointer"
        onClick={onClick}
      >
        <span className="text-gray-500">{title}</span>
        <span className="font-semibold">{subtitle}</span>

        <Image
          src={arrowDownIcon}
          alt=""
          className={`h-5 w-5 text-gray-500 ml-2 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
          <ul className="list-inside text-gray-700">
            {content.map((item: any, index: number) => (
              <li key={index} className="flex items-center gap-2">
                {item.icon}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
