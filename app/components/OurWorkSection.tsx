"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurWorkSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isScrolledBelowThreshold, setScrolledBelowThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        setScrolledBelowThreshold(sectionTop <= window.innerHeight - 400);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const backgroundColor = isScrolledBelowThreshold ? "#ffffff" : "#0A0A0A";
  const textColor = isScrolledBelowThreshold ? "black" : "#ffffff";

  const imagePaths = [
    "/assets/aziza.webp",
    "/assets/boldov_alexandra_psychologist.webp",
    "/assets/dotsquarelab.webp",
    "/assets/kemenes_marcell_personal_trainer.webp",
    "/assets/the_beauty_bar.webp",
    "/assets/wakelite_3d.webp",
  ];

  const handleSlideChange = (realIndex: number) => {
    setActiveIndex(realIndex);
  };

  return (
    <section
      id="our-work"
      ref={sectionRef}
      className="bg-black text-white overflow-hidden py-10"
      style={{
        background: backgroundColor,
        color: textColor,
        transition: "background 1s ease, color 1s ease",
      }}
    >
      <div className="flex flex-col px-5 my-10 mx-auto sm:max-w-[80%]">
        <h3 className="uppercase text-[1.5rem] my-5">{t("Home:our_work")}</h3>
        <h4 className="font-[600] my-3 leading-[140%]">
          {t("Home:our_work_motto")}
        </h4>
        <p className="leading-[183%]">{t("Home:our_work_text")}</p>
      </div>
      <div className="flex flex-col references-container my-[2%] w-[100vw] h-[100vh] justify-center relative">
        {imagePaths.map((path, index) => (
          <img
            key={index}
            src={path}
            style={{
              transition: "transform 1s ease",
              transitionDelay: `${index * 50}ms`,
            }}
            className={`w-[80vw] h-[80vh] md:pl-[20%] absolute top-50 right-0  blur-md opacity-95 transition-transform transform ${
              activeIndex === index ? "translate-x-0" : "translate-x-full"
            }`}
            alt="Background graphics"
          />
        ))}
        <Swiper
          slidesPerView={1.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          onSlideChange={({ realIndex }) => handleSlideChange(realIndex)}
          className="references-swiper"
        >
          <SwiperSlide>
            <div className="border border-[#0000003b] rounded-[3px] m-auto my-24 bg-white">
              <img
                src="/assets/aziza.webp"
                alt="Aziza Brochures"
                className="w-[100%] h-[20vh] md:h-[300px] object-cover"
              />
              <div className="px-5">
                <h4 className="font-[600] my-5 text-[0.8em] md:text-[1rem]">
                  {t("Home:ref1_title")}
                </h4>
                <p className="my-3 text-[0.85em] md:text-[1rem]">
                  {" "}
                  {t("Home:ref1_text")}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#0000003b] rounded-[3px] m-auto bg-white">
              <img
                src="/assets/boldov_alexandra_psychologist.webp"
                alt="A screenshot of Alexandra Boldov's website"
                className="w-[100%] h-[20vh] md:h-[300px] object-cover"
              />
              <div className="px-5">
                <h4 className="font-[600] my-5 text-[0.8em] md:text-[1rem]">
                  {t("Home:ref3_title")}
                </h4>
                <p className="my-3 text-[0.85em] md:text-[1rem]">
                  {" "}
                  {t("Home:ref3_text")}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#0000003b] rounded-[3px] m-auto bg-white">
              <img
                src="/assets/dotsquarelab.webp"
                alt="A screenshot of DotSquarelab's website"
                className="w-[100%] h-[20vh] md:h-[300px] object-cover"
              />
              <div className="px-5">
                <h4 className="font-[600] my-5 text-[0.8em] md:text-[1rem]">
                  {t("Home:ref4_title")}
                </h4>
                <p className="my-3 text-[0.85em] md:text-[1rem]">
                  {" "}
                  {t("Home:ref4_text")}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#0000003b] rounded-[3px] m-auto bg-white">
              <img
                src="/assets/kemenes_marcell_personal_trainer.webp"
                alt="A screenshot of Marcell Kemenes' website"
                className="w-[100%] h-[20vh] md:h-[300px] object-cover"
              />
              <div className="px-5">
                <h4 className="font-[600] my-5 text-[0.8em] md:text-[1rem]">
                  {t("Home:ref5_title")}
                </h4>
                <p className="my-3 text-[0.85em] md:text-[1rem]">
                  {" "}
                  {t("Home:ref5_text")}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#0000003b] rounded-[3px] m-auto bg-white">
              <img
                src="/assets/the_beauty_bar.webp"
                alt="A photo of the Beauty bar logo hanging outside of a building."
                className="w-[100%] h-[20vh] md:h-[300px] object-cover"
              />
              <div className="px-5">
                <h4 className="font-[600] my-5 text-[0.8em] md:text-[1rem]">
                  {t("Home:ref6_title")}
                </h4>
                <p className="my-3 text-[0.85em] md:text-[1rem]">
                  {" "}
                  {t("Home:ref6_text")}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border border-[#0000003b] rounded-[3px] m-auto bg-white">
              <img
                src="/assets/wakelite_3d.webp"
                alt="A photo of a Wakelight 3D package with a red background."
                className="w-[100%] h-[20vh] md:h-[300px] object-cover"
              />
              <div className="px-5">
                <h4 className="font-[600] my-5 text-[0.8em] md:text-[1rem]">
                  {t("Home:ref7_title")}
                </h4>
                <p className="my-3 text-[0.85em] md:text-[1rem]">
                  {" "}
                  {t("Home:ref7_text")}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OurWorkSection;
function handleSlideChange(swiper: any): void {
  throw new Error("Function not implemented.");
}
