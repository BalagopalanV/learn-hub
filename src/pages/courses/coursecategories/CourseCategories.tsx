"use client";
import React, { useEffect, useRef, useState } from "react";
import { poppins } from "../../../../public/fonts/fonts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CourseCard from "@/component/coursecard/CourseCard";
import Image from "next/image";
import leftArrowIcon from "../../../assets/icon/ic_left_arrow.svg";
import rightArrowIcon from "../../../assets/icon/ic_right_arrow.svg";
import filterIcon from "../../../assets/icon/ic_filter.svg";
import arrowDownIcon from "../../../assets/icon/ic_option_down_arrow.svg";
import Modal from "@/component/modal/Modal";

const CourseCategories = () => {
  const [data, setData] = useState<any[]>([]);
  const [showSlider, setShowSlider] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [durationOpen, setDurationOpen] = useState(false);
  const [softwareOpen, setSoftwareOpen] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedSoftware, setSelectedSoftware] = useState("All");
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Add temporary state for modal filters
  const [tempExpertise, setTempExpertise] = useState("All");
  const [tempDuration, setTempDuration] = useState("All");
  const [tempSoftware, setTempSoftware] = useState("All");

  // Add refs for dropdown containers
  const expertiseDropdownRef = useRef<HTMLDivElement>(null);
  const durationDropdownRef = useRef<HTMLDivElement>(null);
  const softwareDropdownRef = useRef<HTMLDivElement>(null);

  const expertiseOptions = ["All", "Beginner", "Intermediate"];
  const durationOptions = [
    "All",
    "3 months",
    "6 months",
    "1 year",
    "1 - 2 years",
  ];
  const softwareOptions = [
    "All",
    "JavaScript",
    "React.js",
    "Figma",
    "Adobe XD",
    "Python",
    "Django",
    "Flutter",
    "Dart",
    "SQL",
    "PostgreSQL",
  ];

  //

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  const categoryButtonsRef = useRef<HTMLDivElement | null>(null);
  const searchDivRef = useRef<HTMLDivElement | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((response) => response.json())
      .then((json: any[]) => {
        setData(json);
        setTimeout(() => checkScrollButtons(), 0);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    if (!categoryButtonsRef.current || !searchDivRef.current) return;

    const catButtons = categoryButtonsRef.current;
    const searchDiv = searchDivRef.current;

    gsap.to(catButtons, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.2,
      ease: "power2.out",

      scrollTrigger: {
        trigger: searchDiv,
        start: "top 40%",
        end: "bottom 70%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.delayedCall(0.1, () => {
            setShowSlider(true);
            setTimeout(() => checkScrollButtons(), 100);
          });
        },
        onLeaveBack: () => gsap.delayedCall(0.3, () => setShowSlider(false)),
      },
    });

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const selectedCategoryData =
    selectedCategory === "All"
      ? { levels: data.flatMap((category) => category.levels) }
      : data.find((item) => item.category === selectedCategory) || {
          levels: [],
        };

  const filterCourses = (courses: any[]) => {
    return courses.filter((course) => {
      const expertiseMatch =
        selectedExpertise === "All" || course.level === selectedExpertise;
      const durationMatch =
        selectedDuration === "All" ||
        course.duration.includes(selectedDuration.toLowerCase());
      const softwareMatch =
        selectedSoftware === "All" ||
        (Array.isArray(course.software)
          ? course.software.includes(selectedSoftware)
          : course.software === selectedSoftware);

      return expertiseMatch && durationMatch && softwareMatch;
    });
  };

  const filteredCourses = filterCourses(selectedCategoryData.levels);

  const toggleDropdown = (dropdown: any) => {
    if (dropdown === "expertise") {
      setExpertiseOpen(!expertiseOpen);
      setDurationOpen(false);
      setSoftwareOpen(false);
    } else if (dropdown === "duration") {
      setDurationOpen(!durationOpen);
      setExpertiseOpen(false);
      setSoftwareOpen(false);
    } else if (dropdown === "software") {
      setSoftwareOpen(!softwareOpen);
      setExpertiseOpen(false);
      setDurationOpen(false);
    }
  };

  const handleSelect = (option: any, type: any) => {
    if (isMobile) {
      // In mobile modal view, use temporary state
      if (type === "expertise") {
        setTempExpertise(option);
        setExpertiseOpen(false);
      } else if (type === "duration") {
        setTempDuration(option);
        setDurationOpen(false);
      } else if (type === "software") {
        setTempSoftware(option);
        setSoftwareOpen(false);
      }
    } else {
      // In desktop view, apply directly
      if (type === "expertise") {
        setSelectedExpertise(option);
        setExpertiseOpen(false);
      } else if (type === "duration") {
        setSelectedDuration(option);
        setDurationOpen(false);
      } else if (type === "software") {
        setSelectedSoftware(option);
        setSoftwareOpen(false);
      }
    }
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;

      const isScrollable = scrollWidth > clientWidth;

      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(isScrollable && scrollLeft < maxScroll - 1);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      checkScrollButtons();

      const scrollElement = scrollRef.current;
      const handleScroll = () => checkScrollButtons();
      const handleResize = () => {
        setTimeout(() => checkScrollButtons(), 100);
      };

      scrollElement.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        scrollElement.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [showSlider, data]);

  const scrollLeft = () => {
    if (scrollRef.current && canScrollLeft) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && canScrollRight) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expertiseDropdownRef.current &&
        !expertiseDropdownRef.current.contains(event.target as Node)
      ) {
        setExpertiseOpen(false);
      }
      if (
        durationDropdownRef.current &&
        !durationDropdownRef.current.contains(event.target as Node)
      ) {
        setDurationOpen(false);
      }
      if (
        softwareDropdownRef.current &&
        !softwareDropdownRef.current.contains(event.target as Node)
      ) {
        setSoftwareOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleModalOpen = () => {
    setTempExpertise(selectedExpertise);
    setTempDuration(selectedDuration);
    setTempSoftware(selectedSoftware);
    setIsModalOpen(true);
  };

  const handleApplyFilters = () => {
    setSelectedExpertise(tempExpertise);
    setSelectedDuration(tempDuration);
    setSelectedSoftware(tempSoftware);
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="h-full w-full bg-[#FDFDFD] max-w-[1700px] mx-auto py-[3rem]">
        <div className="sticky  top-0 bg-[#FDFDFD] w-full z-10 shadow-xs pb-6">
          <h4 className=" sticky top-25 font-semi text-[#999999] text-[1rem] text-center md:text-[1.2rem] my-6 md:my-12">
            Categories
          </h4>

          {isMobile ? (
            <div
              className={`flex sticky top-30 pt-6 flex-wrap justify-center gap-2 mb-4 w-[90%] mx-auto transition-all duration-500 ease-in-out `}
            >
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-5 py-2 text-[0.8rem] shadow-xs cursor-pointer rounded-[10px] border border-[#EFEBFF] hover:bg-gray-50 transition ${
                  selectedCategory === "All" ? "bg-gray-200" : ""
                }`}
              >
                All
              </button>
              {data.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(item.category)}
                  className={`px-5 py-2 text-[0.8rem] shadow-xs cursor-pointer rounded-[10px] border border-[#EFEBFF] hover:bg-gray-50 transition ${
                    selectedCategory === item.category ? "bg-gray-200" : ""
                  }`}
                >
                  {item.category}
                </button>
              ))}
            </div>
          ) : (
            <React.Fragment>
              <div
                style={{ display: !showSlider ? "flex" : "none" }}
                ref={categoryButtonsRef}
                className={`flex sticky top-30 pt-6 flex-wrap justify-center gap-4 mb-4 w-[65%] mx-auto transition-all duration-500 ease-in-out ${
                  showSlider
                    ? "opacity-0 pointer-events-none absolute"
                    : "opacity-100"
                }`}
              >
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-5 py-2 shadow-xs text-[0.8rem] cursor-pointer rounded-[10px] border border-[#EFEBFF] hover:bg-gray-50 transition ${
                    selectedCategory === "All" ? "bg-gray-200" : ""
                  }`}
                >
                  All
                </button>
                {data.map((item: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(item.category)}
                    className={`px-5 py-2 shadow-xs text-[0.8rem] cursor-pointer rounded-[10px] border border-[#EFEBFF] hover:bg-gray-50 transition ${
                      selectedCategory === item.category ? "bg-gray-200" : ""
                    }`}
                  >
                    {item.category}
                  </button>
                ))}
              </div>
              <div
                style={{ display: showSlider ? "flex" : "none" }}
                className={`w-full sticky  top-35 flex flex-row justify-center items-center h-12 transition-all duration-500 ease-in-out ${
                  showSlider
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none absolute"
                }`}
              >
                <div className="w-[70%] h-full flex justify-between items-center">
                  <button
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    className={`w-[5%] h-auto bg-[#FFFFFF] py-2 border border-[#F5F4FB] rounded-[25px] flex justify-center items-center ${
                      !canScrollLeft
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    <Image src={leftArrowIcon} alt="left arrow" />
                  </button>

                  <div
                    ref={scrollRef}
                    className="w-full mx-[2rem] flex flex-row gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap"
                  >
                    <button
                      onClick={() => setSelectedCategory("All")}
                      className={`px-5 py-2  shadow-xs my-1 text-nowrap text-[0.8rem] cursor-pointer rounded-[10px] border border-[#EFEBFF] hover:bg-gray-50 transition ${
                        selectedCategory === "All" ? "bg-gray-200" : ""
                      }`}
                    >
                      All
                    </button>
                    {data.map((item: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedCategory(item.category)}
                        className={`px-5 py-2  shadow-xs my-1 text-nowrap text-[0.8rem] cursor-pointer rounded-[10px] border border-[#EFEBFF] hover:bg-gray-50 transition ${
                          selectedCategory === item.category
                            ? "bg-gray-200"
                            : ""
                        }`}
                      >
                        {item.category}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    className={`w-[5%] h-auto bg-[#FFFFFF] py-2 rounded-[25px] border border-[#F5F4FB] flex justify-center items-center ${
                      !canScrollRight
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                  >
                    <Image src={rightArrowIcon} alt="right arrow" />
                  </button>
                </div>
              </div>
            </React.Fragment>
          )}
          {isMobile ? (
            <div
              onClick={handleModalOpen}
              className={`flex flex-row w-fit px-5 mx-6 mt-[6rem] gap-10 bg-[#FAF9FD] border border-[#EEEBFD] py-2 rounded-full transition-all duration-300 ${
                isModalOpen
                  ? "opacity-50 border-[#716D82] bg-[#F0EFFA]"
                  : "opacity-100"
              }`}
            >
              <span
                className={`${poppins.className} text-[1rem] font-semi text-[#716D82]`}
              >
                Filter
              </span>
              <Image src={filterIcon} alt="icon-filter" />
            </div>
          ) : (
            <div
              style={{
                marginTop: !showSlider ? "2rem" : "5rem",
              }}
              ref={searchDivRef}
              className="flex flex-wrap items-center sticky scroll-p-[1rem] top-45 justify-center gap-3 bg-[#FFFFFF] w-fit mx-auto px-0 py-1 rounded-[25px]  shadow-sm "
            >
              <div className="py-2 rounded-full flex items-center ml-6">
                <span
                  className={`${poppins.className} text-purple-500 font-medium mr-3`}
                >
                  Filter
                </span>
              </div>

              <div className="relative" ref={expertiseDropdownRef}>
                <div
                  className="px-6 py-2 bg-gray-50 rounded-full flex items-center justify-between min-w-[120px] cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleDropdown("expertise")}
                >
                  <span
                    className={`${poppins.className} text-[0.8rem] text-[#50575F]`}
                  >
                    {selectedExpertise !== "All"
                      ? selectedExpertise
                      : "Expertise"}
                  </span>
                  <Image
                    src={expertiseOpen ? arrowDownIcon : arrowDownIcon}
                    alt=""
                    className={`h-5 w-5 text-gray-500 ml-2 transition-transform ${
                      expertiseOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expertiseOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg z-10">
                    {expertiseOptions.map((option) => (
                      <div
                        key={option}
                        className={`${
                          poppins.className
                        } px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                          selectedExpertise === option
                            ? "text-purple-500 font-medium"
                            : "text-gray-700"
                        }`}
                        onClick={() => handleSelect(option, "expertise")}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative" ref={durationDropdownRef}>
                <div
                  className="px-6 py-2 bg-gray-50 rounded-full flex items-center justify-between min-w-[120px] cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleDropdown("duration")}
                >
                  <span
                    className={`${poppins.className} text-[0.8rem] text-[#50575F]`}
                  >
                    {selectedDuration !== "All" ? selectedDuration : "Duration"}
                  </span>

                  <Image
                    src={durationOpen ? arrowDownIcon : arrowDownIcon}
                    alt=""
                    className={`h-5 w-5 text-gray-500 ml-2 transition-transform ${
                      durationOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {durationOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg z-10">
                    {durationOptions.map((option) => (
                      <div
                        key={option}
                        className={`${
                          poppins.className
                        } px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                          selectedDuration === option
                            ? "text-purple-500 font-medium"
                            : "text-gray-700"
                        }`}
                        onClick={() => handleSelect(option, "duration")}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative mr-2 min-w-50" ref={softwareDropdownRef}>
                <div
                  className="px-6 py-2 bg-gray-50 rounded-full flex items-center justify-between min-w-[120px] cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleDropdown("software")}
                >
                  <span
                    className={`${poppins.className} text-[0.8rem] text-[#50575F]`}
                  >
                    {selectedSoftware !== "All" ? selectedSoftware : "Software"}
                  </span>
                  <Image
                    src={softwareOpen ? arrowDownIcon : arrowDownIcon}
                    alt=""
                    className={`h-5 w-5 text-gray-500 ml-2 transition-transform ${
                      softwareOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {softwareOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg z-10">
                    {softwareOptions.map((option) => (
                      <div
                        key={option}
                        className={`${
                          poppins.className
                        } px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                          selectedSoftware === option
                            ? "text-purple-500 font-medium"
                            : "text-gray-700"
                        }`}
                        onClick={() => handleSelect(option, "software")}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className=" bg-white z-1 px-5 ">
          {filteredCourses.map((course: any, index: number) => (
            <React.Fragment key={index}>
              <CourseCard {...course} />
              <div className="w-[50%] m-auto">
                <hr className="text-[#EFEFEF]" />
              </div>
            </React.Fragment>
          ))}
        </div>

        {isMobile && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2
              className={`${poppins.className} text-[1rem] text-center text-[#29282D] font-semibold mb-4`}
            >
              filter
            </h2>
            <div className="flex flex-col gap-5">
              <div className="relative" ref={expertiseDropdownRef}>
                <div
                  className="px-6 py-4 bg-gray-50 rounded-full flex items-center justify-between min-w-[120px] cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleDropdown("expertise")}
                >
                  <span className={`${poppins.className} text-[#50575F]`}>
                    {tempExpertise !== "All" ? tempExpertise : "Expertise"}
                  </span>
                  <Image
                    src={expertiseOpen ? arrowDownIcon : arrowDownIcon}
                    alt=""
                    className={`h-5 w-5 text-gray-500 ml-2 transition-transform ${
                      expertiseOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {expertiseOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg z-10">
                    {expertiseOptions.map((option) => (
                      <div
                        key={option}
                        className={`${
                          poppins.className
                        } px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                          selectedExpertise === option
                            ? "text-purple-500 font-medium"
                            : "text-gray-700"
                        }`}
                        onClick={() => handleSelect(option, "expertise")}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative" ref={durationDropdownRef}>
                <div
                  className="px-6 py-4 bg-gray-50 rounded-full flex items-center justify-between min-w-[120px] cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleDropdown("duration")}
                >
                  <span className={`${poppins.className} text-[#50575F]`}>
                    {tempDuration !== "All" ? tempDuration : "Duration"}
                  </span>
                  <Image
                    src={durationOpen ? arrowDownIcon : arrowDownIcon}
                    alt=""
                    className={`h-5 w-5 text-gray-500 ml-2 transition-transform ${
                      durationOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {durationOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white rounded-lg shadow-lg z-10">
                    {durationOptions.map((option) => (
                      <div
                        key={option}
                        className={`${
                          poppins.className
                        } px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                          selectedDuration === option
                            ? "text-purple-500 font-medium"
                            : "text-gray-700"
                        }`}
                        onClick={() => handleSelect(option, "duration")}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative" ref={softwareDropdownRef}>
                <div
                  className="px-6 py-2 bg-gray-50 rounded-full flex items-center justify-between min-w-[120px] cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleDropdown("software")}
                >
                  <span className={`${poppins.className} text-[#50575F]`}>
                    {tempSoftware !== "All" ? tempSoftware : "Software"}
                  </span>
                  <Image
                    src={softwareOpen ? arrowDownIcon : arrowDownIcon}
                    alt=""
                    className={`h-5 w-5 text-gray-500 ml-2 transition-transform ${
                      softwareOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {softwareOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg z-10">
                    {softwareOptions.map((option) => (
                      <div
                        key={option}
                        className={`${
                          poppins.className
                        } px-4 py-2 cursor-pointer hover:bg-gray-50 ${
                          selectedSoftware === option
                            ? "text-purple-500 font-medium"
                            : "text-gray-700"
                        }`}
                        onClick={() => handleSelect(option, "software")}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div
              onClick={handleApplyFilters}
              className="font-medium w-fit bg-[#8061FF] m-auto mt-6 text-white text-[14px] md:text-[12px] px-7 md:px-3 py-2 rounded-full cursor-pointer hover:bg-[#6B4FE0]"
            >
              Apply
            </div>
          </Modal>
        )}
      </section>

      {/* */}
    </>
  );
};

export default CourseCategories;
