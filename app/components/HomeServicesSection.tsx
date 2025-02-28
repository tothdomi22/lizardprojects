"use client";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import HomeServicesCarausel from "./HomeServicesCarausel";
import Image from "next/image";

const HomeServicesSection = () => {
  const { t } = useTranslation();

  const [isHovered, setIsHovered] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseOver = (index: number) => () => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-col lg:flex-row bg-navbarBlack w-[100vw]  overflow-x-hidden px-5 py-[5rem]">
        <div className="flex flex-col m-auto lg:max-w-[65vw] ">
          <h3 className="text-white uppercase space-[-0.72px] pb-5">
            {t("Home:home_services_title")}
          </h3>
          <h4 className="text-white font-[600] pb-3">
            {t("Home:home_services_sub_title")}
          </h4>
          <p className="text-white">{t("Home:home_services_describtion")}</p>
        </div>

        <Link
          className="flex flex-col md:flex-row mx-auto group mt-[5rem]  lg:w-[280px] py-10"
          href="/services"
        >
          <button className="flex flex-row view-all-btn1  text-lighterBlack px-10 py-2 my-auto w-fit text-center ">
            {t("Home:view_all_btn")}
            <img
              src="assets/chevron_right_explore_btn.svg"
              alt="View all"
              className="w-[7px] flex flex-row group-hover:ml-5 transition-[0.5s] my-auto ml-3 mr-auto"
            />
          </button>
        </Link>
      </div>

      <HomeServicesCarausel></HomeServicesCarausel>
       
       {/* EU PROJECT MANAGEMENT STUFF COMMENTED OUT, IN CASE IT WILL BE NEEDED IN THE FUTURE */}

      {/* <div className="flex flex-col w-100 h-[60vh] relative ">
        <div className="w-full h-full absolute z-[3]">
          <div className="flex flex-col lg:flex-row w-full h-full justify-center">
            <div className="w-[120px] h-[80px] md:w-[150px] md:h-[120px] lg:w-[210px] lg:h-[153px] relative mx-auto mt-[5%] lg:ml-[10vw] lg:mr-5 lg:my-[5vw]">
              <Image
                src={"/assets/eu_flag.webp"}
                layout="fill"
                objectFit="cover"
                alt={"European Union flag"}
              ></Image>
            </div>
            <div className="flex flex-col lg:my-auto lg:mr-auto lg:ml-5">
            <h3 className="font-[400] text-white lg:text-[1.1rem] uppercase mt-3  lg:my-2 mx-auto lg:mx-5">
            {t("Services:eu_title")}
            </h3>
            <h4 className="font-[600] text-white mx-auto lg:mx-5 mt-2 text-[0.85rem] lg:text-[1.1rem] w-fit">
            {t("Services:eu_sub_title")}
            </h4>
            <p className="text-white text-[1rem] hidden lg:flex lg:mx-5 mt-5 max-w-[80vw] lg:max-w-[45vw] mx-auto">
            {t("Services:eu_intro")}
            </p>
            <Link
              className="group flex mx-auto lg:mx-5 my-5"
              href="/services/eu-project-management"
            >
              <button className="flex flex-row view-all-btn1  text-lighterBlack px-10 py-2 my-auto w-fit text-center ">
              {t("Home:view_details_btn")}
                <img
                  src="assets/chevron_right_explore_btn.svg"
                  alt="View all"
                  className="w-[7px] flex flex-row group-hover:ml-5 transition-[0.5s] my-auto ml-3 mr-auto"
                />
              </button>
            </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute z-[2] bg-[#000000c0]"></div>
        <Image
          src={"/assets/eu_service_bg.webp"}
          className="object-cover flex"
          layout="fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={"A male and a female person talking at a whiteboard."}
        ></Image>
      </div> */}
    </section>
  );
};

export default HomeServicesSection;
