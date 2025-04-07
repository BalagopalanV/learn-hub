"use client";
import React, { useState } from "react";
import { poppins } from "../../../../public/fonts/fonts";
import InputField from "@/component/inputfield/InputField";
import imageLine from "../../../assets/images/img_contact_line.svg";
import Primarybutton from "@/component/primaryButton/Primarybutton ";
const Landingsection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10-digit phone";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitted:", formData);
      alert("Submitted successfully");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <section
      className="h-screen w-full bg-cover bg-center bg-no-repeat px-8 "
      style={{ backgroundImage: `url(${imageLine.src})` }}
    >
      <div className="h-[100%] flex flex-col justify-end items-center">
        <div className="h-[20%] w-full flex justify-center items-center">
          <h2
            className={` ${poppins.className} text-center text-[2rem] py-[1rem]  md:text-[3rem] font-bold bg-clip-text text-transparent  bg-gradient-to-r from-[#7C54FF] to-[#A6B1FE]`}
          >
            One Step Away from Your IT Career.{" "}
            <br className="hidden sm:block" />
            Let’s Talk!
          </h2>
        </div>
        <div className="h-[60%] w-full ">
          <form
            onSubmit={handleSubmit}
            className="h-full w-full flex flex-col justify-center items-center"
          >
            <div className="flex flex-col md:flex-row  gap-x-[1rem] w-full">
              <InputField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <InputField
                label="Phone (Optional)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phon}
              />
            </div>
            <div className="w-full">
              <InputField
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
              <div className="w-full flex justify-center items-center pt-6">
                <Primarybutton
                  label={"Leave us a Message"}
                  className={`${poppins.className} text-[#fff] text-[0.8rem] w-fit px-2 py-1 bg-[#8061FF]`}
                  icon
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Landingsection;
