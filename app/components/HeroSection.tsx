"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Ensure videoRef.current is not null before calling methods on it
    if (videoRef.current) {
      // Set the playback rate to 0.5 (half the normal speed)
      videoRef.current.playbackRate = 1.0;

      // Start playing the video once it's loaded
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  }, []); // Empty dependency a


  return (
    <div className="flex flex-col hero-section w-[100vw] h-[100vh] relative">
      <div className="flex flex-col justify-center bg-transparent z-[2] w-full h-[100vh] top-0 pt-10 px-5">
        <h2 className="text-white font-[600] text-[1.5rem] md:text-[2.6rem] mx-auto md:ml-24  md:leading-[100%] lg:text-[64px]">
          {t("Home:hero_text_part1")} <br></br>
          <span className="text-lighterGreen font-[600] text-[1.5rem] md:text-[2.6rem] md:leading-[100%] lg:text-[64px]">
            {t("Home:hero_text_part2")}
          </span>
        </h2>

        <Link
          className="max-h-[30px] group mx-auto md:ml-24 mt-10"
          href="/services"
        >
          <button className="flex flex-row text-[0.85rem] md:text-[1rem] text-lighterBlack explore-button w-fit h-fit px-10 py-4 font-[600]">
            {" "}
            {t("Home:hero_explore")}
            <img
              src="/assets/chevron_right_explore_btn.svg"
              alt="chevron"
              className="chevron-right-explore flex mr-0 ml-3 w-[8px] hfit my-auto group-hover:ml-[2.5rem] transition-[0.5s]"
            />
          </button>
        </Link>
      </div>
      <div className="bg-[#000000c2] z-[1] absolute w-[100vw] h-[100vh] object-cover "></div>
      <video
        ref={videoRef}
        poster="/assets/services/graphics_design.webp"
        className="w-[100vw] h-[100vh] object-cover z-[0] absolute overflow-hidden"
        autoPlay
        muted
        loop
      >
        <source
          src="/assets/videos/lizardprojects_pr_snizzle.webm"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroSection;
