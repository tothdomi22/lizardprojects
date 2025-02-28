import Link from "next/link";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const HomeServicesCarausel: React.FC = () => {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      {/* ------------------------ DESKTOP MENU --------------------- */}
      <div className=" hidden lg:flex full-screen-container relative">
        <div className=" hidden lg:flex flex-row bg-[#000000c0] w-[100vw] h-[100vh] z-[2] absolute">
          <div
            className="overlay-box w-[100vw] lg:w-[20vw] lg:h-[50vh] h-[100vh] group"
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services/web-design-and-development"
              className="w-full h-full z-[3] flex flex-col"
            >
              <h3 className="text-white uppercase text-center mt-[4rem]  font-[600] text-[0.75vw]  ">
                {" "}
                {t("Services:webdesign_and_dev")}
              </h3>
              <p className="px-1 text-white  max-w-[90%] font-[400] text-[0.7vw] leading-[220%] mx-auto mt-[3rem]">
                {t("Services:webdesign_and_dev_intro")}
              </p>
              <button className="flex flex-row mb-0 absolute bottom-8">
                <span className="text-white text-[1rem]">
                  {" "}
                  {t("Home:view_details_btn")}{" "}
                </span>
                <svg
                  className="mt-0 ml-3"
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
                </svg>
              </button>
            </Link>
          </div>

          <div
            className="overlay-box w-[100vw] lg:w-[20vw] lg:h-[50vh] h-[100vh] group"
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services/online-marketing"
              className="w-full h-full z-[3] flex flex-col"
            >
              <h3 className="text-white uppercase text-center mt-[4rem]  font-[600] text-[0.75vw]  ">
                {t("Services:online_marketing")}
              </h3>
              <p className="px-1 text-white  max-w-[90%] font-[400] text-[0.7vw] leading-[220%] mx-auto mt-[3rem]">
                {t("Services:online_marketing_intro")}
              </p>
              <button className="flex flex-row mb-0 absolute bottom-8">
                <span className="text-white text-[1rem]">
                  {" "}
                  {t("Home:view_details_btn")}{" "}
                </span>
                <svg
                  className="mt-0 ml-3"
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
                </svg>
              </button>
            </Link>
          </div>

          <div
            className="overlay-box w-[100vw] lg:w-[20vw] lg:h-[50vh] h-[100vh] group"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services/graphic-design"
              className="w-full h-full z-[3] flex flex-col"
            >
              <h3 className="px-1 text-white uppercase text-center mt-[4rem]  font-[600] text-[0.75vw]  ">
                {t("Services:graphic_design")}
              </h3>
              <p className="px-1 text-white  max-w-[90%] font-[400] text-[0.7vw] leading-[220%] mx-auto mt-[3rem]">
                {t("Services:graphic_design_intro")}
              </p>
              <button className="flex flex-row mb-0 absolute bottom-8">
                <span className="text-white text-[1rem]">
                  {" "}
                  {t("Home:view_details_btn")}{" "}
                </span>
                <svg
                  className="mt-0 ml-3"
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
                </svg>
              </button>
            </Link>
          </div>
          <div
            className="overlay-box w-[100vw] lg:w-[20vw] lg:h-[50vh] h-[100vh] group"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services/media"
              className="w-full h-full z-[3] flex flex-col"
            >
              <h3 className="px-1 text-white uppercase text-center mt-[4rem]  font-[600] text-[0.75vw]  ">
                {t("Services:media")}
              </h3>
              <p className="px-1 text-white  max-w-[90%] font-[400] text-[0.7vw] leading-[220%] mx-auto mt-[3rem]">
                {t("Services:media_intro")}
              </p>
              <button className="flex flex-row mb-0 absolute bottom-8">
                <span className="text-white text-[1rem]">
                  {" "}
                  {t("Home:view_details_btn")}{" "}
                </span>
                <svg
                  className="mt-0 ml-3"
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
                </svg>
              </button>
            </Link>
          </div>
          <div
            className="overlay-box w-[20vw] h-[50vh] group"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services/event-organization"
              className="w-full h-full z-[3] flex flex-col"
            >
              <h3 className="px-1 text-white uppercase text-center mt-[4rem]  font-[600] text-[0.75vw]  ">
                {t("Services:event_organization")}
              </h3>
              <p className="px-1 text-white  max-w-[90%] font-[400] text-[0.7vw] leading-[220%] mx-auto mt-[3rem]">
                {t("Services:event_organization_intro")}
              </p>
              <button className="flex flex-row mb-0 absolute bottom-8">
                <span className="text-white text-[1rem]">
                  {" "}
                  {t("Home:view_details_btn")}{" "}
                </span>
                <svg
                  className="mt-0 ml-3"
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div className="image-grid flex flex-col lg:flex-row z-[1] w-[100vw] mr-auto">
          <div
            className={`image-container ${hoveredIndex === 0 ? "hovered" : ""}`}
          >
            <img
              src="/assets/services/webdev.webp"
              alt="A person looking at a monitor that shows lines of code."
            />
          </div>
          <div
            className={`image-container ${hoveredIndex === 1 ? "hovered" : ""}`}
          >
            <img
              src="/assets/services/online_marketing.webp"
              alt="A Macbook showing various charts and a tablet showing a calendar."
            />
          </div>
          <div
            className={`image-container ${hoveredIndex === 2 ? "hovered" : ""}`}
          >
            <img
              src="/assets/services/graphics_design.webp"
              alt="A female person working on graphics design using her tablet and Macbook."
            />
          </div>
          <div
            className={`image-container ${hoveredIndex === 3 ? "hovered" : ""}`}
          >
            <img
              src="/assets/services/media.webp"
              alt="A high end camera focusing on muffins, for a food commerical."
            />
          </div>
          <div
            className={`image-container ${hoveredIndex === 4 ? "hovered" : ""}`}
          >
            <img
              src="/assets/services/event_organization.webp"
              alt="A person writing something in a calendar."
            />
          </div>
        </div>
      </div>

      {/* MOBILE MENU -------------------------------------------------------------------- */}

      <div className="grid bg-[#000000c0] lg:hidden grid-cols-1 w-[100vw] overflow-hidden relative">
        <div className="mobile-service-box relative">
          <Link
            href="/services/web-design-and-development"
            className="w-full h-full"
          >
            <h3 className="text-white uppercase text-center absolute top-10 mx-auto w-full z-[3] font-[600] text-[4.25vw]  ">
              {" "}
              {t("Services:webdesign_and_dev")}
            </h3>
            <button className="flex flex-row px-10 py-2 right-2 bottom-5 z-[3] text-lighterBlack rounded-[3px] absolute bg-white">
              {t("Home:view_details_btn")}
              <svg
                className="my-auto ml-3 w-[0.5rem]"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
              </svg>
            </button>
            <div className="w-full h-full absolute z-[2] bg-[#000000c0]"></div>
            <Image
              src="/assets/services/webdev.webp"
              alt="A person looking at a monitor that shows lines of code."
              className="mobile-img"
              width={1200}
              height={720}
            />
          </Link>
        </div>
        <div className="mobile-service-box relative">
          <Link href="/services/online-marketing" className="w-full h-full">
            <h3 className="text-white uppercase text-center absolute top-10 mx-auto w-full z-[3] font-[600] text-[4.25vw]  ">
              {" "}
              {t("Services:online_marketing")}
            </h3>
            <button className="flex flex-row px-10 py-2 right-2 bottom-5 z-[3] text-lighterBlack rounded-[3px] absolute bg-white">
              {t("Home:view_details_btn")}
              <svg
                className="my-auto ml-3 w-[0.5rem]"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
              </svg>
            </button>
            <div className="w-full h-full absolute z-[2] bg-[#000000c0]"></div>
            <Image
              src="/assets/services/online_marketing.webp"
              alt="A Macbook showing various charts and a tablet showing a calendar."
              className="mobile-img"
              width={1200}
              height={720}
            />
          </Link>
        </div>
        <div className="mobile-service-box relative">
          <Link href="/services/graphic-design" className="w-full h-full">
            <h3 className="text-white uppercase text-center absolute top-10 mx-auto w-full z-[3] font-[600] text-[4.25vw]  ">
              {" "}
              {t("Services:graphic_design")}
            </h3>
            <button className="flex flex-row px-10 py-2 right-2 bottom-5 z-[3] text-lighterBlack rounded-[3px] absolute bg-white">
              {t("Home:view_details_btn")}
              <svg
                className="my-auto ml-3 w-[0.5rem]"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
              </svg>
            </button>
            <div className="w-full h-full absolute z-[2] bg-[#000000c0]"></div>
            <Image
              src="/assets/services/graphics_design.webp"
              alt="A female person working on graphics design using her tablet and Macbook."
              className="mobile-img"
              width={1200}
              height={720}
            />
          </Link>
        </div>
        <div className="mobile-service-box relative">
          <Link href="/services/media" className="w-full h-full">
            <h3 className="text-white uppercase text-center absolute top-10 mx-auto w-full z-[3] font-[600] text-[4.25vw]  ">
              {" "}
              {t("Services:media")}
            </h3>
            <button className="flex flex-row px-10 py-2 right-2 bottom-5 z-[3] text-lighterBlack rounded-[3px] absolute bg-white">
              {t("Home:view_details_btn")}
              <svg
                className="my-auto ml-3 w-[0.5rem]"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
              </svg>
            </button>
            <div className="w-full h-full absolute z-[2] bg-[#000000c0]"></div>
            <Image
              src="/assets/services/media.webp"
              alt="A high end camera focusing on muffins, for a food commerical."
              className="mobile-img"
              width={1200}
              height={720}
            />
          </Link>
        </div>
        <div className="mobile-service-box relative">
          <Link href="/services/event-organization" className="w-full h-full">
            <h3 className="text-white uppercase text-center absolute top-10 mx-auto w-full z-[3] font-[600] text-[4.25vw]  ">
              {" "}
              {t("Services:event_organization")}
            </h3>
            <button className="flex flex-row px-10 py-2 right-2 bottom-5 z-[3] text-lighterBlack rounded-[3px] absolute bg-white">
              {t("Home:view_details_btn")}
              <svg
                className="my-auto ml-3 w-[0.5rem]"
                width="10"
                height="19"
                viewBox="0 0 10 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.63386 8.54184C10.122 9.07179 10.122 9.93244 9.63386 10.4624L2.13533 18.6025C1.64714 19.1325 0.854325 19.1325 0.366139 18.6025C-0.122046 18.0726 -0.122046 17.2119 0.366139 16.682L6.98203 9.5L0.370045 2.31803C-0.118141 1.78807 -0.118141 0.927424 0.370045 0.397467C0.858231 -0.132489 1.65104 -0.132489 2.13923 0.397467L9.63777 8.5376L9.63386 8.54184Z" />
              </svg>
            </button>
            <div className="w-full h-full absolute z-[2] bg-[#000000c0]"></div>
            <Image
              src="/assets/services/event_organization.webp"
              alt="A person writing something in a calendar."
              className="mobile-img"
              width={1200}
              height={720}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeServicesCarausel;
