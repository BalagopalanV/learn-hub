"use client";

import React from "react";
import { poppins } from "../../../public/fonts/fonts";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  required?: boolean;
}

export default function InputField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required = false,
}: InputFieldProps) {
  return (
    <div className="w-full mb-4">
      <label htmlFor={name} className="block text-sm text-gray-500 mb-1">
        {label}{" "}
        {required && (
          <span className={` ${poppins.className} text-red-500`}>*</span>
        )}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full bg-transparent border-b text-sm text-gray-800 px-1 py-1 focus:outline-none
          ${error ? "border-red-500" : "border-gray-300 focus:border-blue-500"}
        `}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
