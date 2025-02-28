"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface ServiceTemplateProps {
  bgColor: string;
  textColor: string;
  pageURL: string;
  imgSrc: string;
  imgAlt: string;
  align: string;
  serviceTitle: string;
  serviceIntro: string;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  bgColor,
  textColor,
  pageURL,
  imgSrc,
  imgAlt,
  align,
  serviceTitle,
  serviceIntro,
}) => {
  const { t } = useTranslation();
  const [isTextBoxHovered, setIsTextBoxHovered] = useState(false);
  const [isImageBoxHovered, setIsImageBoxHovered] = useState(false);

  const isLeftAligned = align === "left";

  const handleTextBoxMouseEnter = () => {
    setIsImageBoxHovered(true);
  };

  const handleTextBoxMouseLeave = () => {
    setIsImageBoxHovered(false);
  };

  const handleImageBoxMouseEnter = () => {
    setIsTextBoxHovered(true);
  };

  const handleImageBoxMouseLeave = () => {
    setIsTextBoxHovered(false);
  };

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="flex flex-col md:flex-row justify-center w-[100vw] overflow-hidden"
    >
      <div
        id="text-box"
        style={{ backgroundColor: bgColor }}
        className={`px-5 min-w-[40vw] rounded-[20px] m-auto justify-center ${
          isLeftAligned ? "order-2 lg:order-1" : "order-2 lg:order-2"
        } ${isTextBoxHovered ? "textbox-hover-animation" : ""}`}
        onMouseEnter={handleTextBoxMouseEnter}
        onMouseLeave={handleTextBoxMouseLeave}
      >
        <div className="w-fit m-auto">
          <h2
            style={{ color: textColor }}
            className="font-[600] my-10 text-[1.2rem] w-fit uppercase"
          >
            {serviceTitle}
          </h2>
          <p style={{ color: textColor }} className=" max-w-[600px] my-2">
            {serviceIntro}
          </p>
          <Link className="group flex my-10 w-fit" href={pageURL}>
            <button className="flex flex-row view-all-btn1  text-lighterBlack px-10 py-2 my-auto w-fit text-center ">
              {t("Home:view_details_btn")}
              <img
                src="/assets/chevron_right_explore_btn.svg"
                alt="View all"
                className="w-[7px] flex flex-row group-hover:ml-5 transition-[0.5s] my-auto ml-3 mr-auto"
              />
            </button>
          </Link>
        </div>
      </div>

      <div
        id="image-box"
        className={`min-w-[60vw] m-auto relative ${
          isLeftAligned ? "order-1 lg:order-2" : "order-1 lg:order-1"
        } ${isImageBoxHovered ? "image-hover-animation " : ""}`}
        onMouseEnter={handleImageBoxMouseEnter}
        onMouseLeave={handleImageBoxMouseLeave}
      >
        <svg
          className={`hidden md:flex absolute ${
            isLeftAligned ? "left-[0px] " : "right-[-1px]"
          } top-[0px] w-fit z-[2] ${
            !isLeftAligned ? "scale-x-[-1]" : "scale-x-1"
          }`}
          width="109"
          height="698"
          viewBox="0 0 109 698"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 698L109 0H0L0 698Z" fill={bgColor} />
        </svg>

        <img src={imgSrc} alt={imgAlt} className="pl-[1px] pt-[1px]" />
      </div>
    </div>
  );
};

export default ServiceTemplate;
