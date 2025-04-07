import Image from "next/image";
import { poppins } from "../../../public/fonts/fonts";

interface ContactCardProps {
  icon: string; // path to icon
  title: string;
  description: string;
  contact: string;
  contactHref?: string;
  bgColor?: string;
  iconBg?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  description,
  contact,
  contactHref,
  bgColor = "bg-white",
  iconBg = "bg-[#F5F1FF]",
}) => {
  return (
    <div
      className={`w-full h-auto m rounded-2xl shadow-sm p-6 ${bgColor} space-y-4`}
    >
      <div
        className={`w-10 h-10 rounded-md flex items-center justify-center border-[1px] bg-[FFFFFF] border-[#F8F7FE] `}
      >
        <Image src={icon} alt={title} width={24} height={24} />
      </div>

      <div>
        <h3
          className={`${poppins.className} font-semibold text-lg text-[#000000]`}
        >
          {title}
        </h3>
        <p className={`${poppins.className} text-sm text-[#777777]`}>
          {description}
        </p>
      </div>

      <a
        href={contactHref || `tel:${contact}`}
        className="text-[#8854C0] font-medium text-base"
      >
        {contact}
      </a>
    </div>
  );
};

export default ContactCard;
