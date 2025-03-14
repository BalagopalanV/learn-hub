"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ic_navbar from "../../assets/icon/ic_navbar.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup on unmount
    };
  }, [menuOpen]);

  return (
    <nav
      className="sticky top-0 z-50 bg-white shadow-md rounded-full w-[85%] max-w-3xl mx-auto px-4 py-2"
      style={{
        fontFamily: "var(--font-montserrat), sans-serif",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <Image src={ic_navbar} alt="Logo" />
        </div>

        <ul className="hidden md:flex gap-x-6 text-black text-[1rem]">
          <li className="cursor-pointer hover:text-gray-500">About us</li>
          <li className="cursor-pointer hover:text-gray-500">Courses</li>
          <li className="cursor-pointer hover:text-gray-500">Contact us</li>
        </ul>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="text-base px-4 py-2 rounded-full bg-gray-100 outline-none w-[150px] md:w-[200px]"
          />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black text-2xl"
        >
          {"☰"}
        </button>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0  bg-gradient-to-r from-[#FFFFFF] to-[#DFEAFD]  shadow-lg z-50 transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "h-[100dvh] opacity-100 translate-y-0"
            : "h-0 opacity-0 translate-y-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-black text-3xl font-light z-10 h-10 w-10 flex items-center justify-center"
        >
          ✕
        </button>

        <div className="flex flex-col items-center justify-center h-full p-8">
          <ul className="flex flex-col gap-y-8 text-black text-center text-xl w-full">
            <li className="cursor-pointer hover:text-gray-500 py-2">
              About us
            </li>
            <li className="cursor-pointer hover:text-gray-500 py-2">Courses</li>
            <li className="cursor-pointer hover:text-gray-500 py-2">
              Contact us
            </li>
          </ul>

          <div className="mt-8 w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              className="text-base px-4 py-3 w-full rounded-full bg-gray-100 outline-none"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
