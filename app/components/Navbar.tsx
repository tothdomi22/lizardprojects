"use client";

import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import i18n from "../i18n";
import i18nConfig, { locales } from "@/i18nConfig";
import router, { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const pathname = usePathname();

  // Check if the current page route is one of the home routes

  useEffect(() => {
    // Check if the code is running on the client side

    // replace with your actual locale
    // Check if the current page route is one of the home routes
    // const checkIsHomePage = pathname === "/" || pathname === `/${currentLocale}`;

    const checkIsHomePage = () => {


      if (pathname === "/" || pathname === `/${currentLocale}`) {
        setIsHomePage(true);
      } else {
        setIsHomePage(false);
      }
    };

    checkIsHomePage();

    const handleScroll = () => {
      // Check if the user has scrolled down
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // console.log(currentLocale);
    // console.log(pathname);
    // console.log(isHomePage);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]); // Run this effect on

  const router = useRouter();

  const toggleMobileMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div></div>
        <header
          className={`flex text-white w-full fixed top-0 z-[200] transition-all ${
            isHomePage && !scrolling
              ? "h-[160px] bg-transparent"
              : "h-[85px] bg-navbarBlack"
          } ${!isHomePage ? "bg-navbarBlack" : ""}`}
        >
          <nav className="flex w-full">
            <ul className="my-auto py-5 flex flex-row mx-auto w-full">
              <li className={`my-auto ${isOpen ? "hidden" : ""}`}>
                <Link href="/">
                  <img
                    src="/assets/logo_green.png"
                    alt="Lizard Projects logo"
                    className="w-[130px] xxs:w-[200px] flex ml-10 lg:ml-[5rem] mr-auto"
                  />

                  
                </Link>
              </li>
              <li className="hidden lg:flex cursor-pointer magic-link font-[400] text-[18px] text-white my-auto ml-auto mr-5">
                <Link href="/services">{t("Navbar:services")}</Link>
              </li>
              <li className="hidden lg:flex cursor-pointer magic-link font-[400] text-[18px] text-white my-auto mx-5">
                <Link href="/#about"> {t("Navbar:about")}</Link>
              </li>
              <li className="hidden lg:flex cursor-pointer magic-link font-[400] text-[18px] text-white my-auto mx-5">
                <Link href="/#our-work">{t("Navbar:our_work")}</Link>
              </li>
              <li className="hidden lg:flex cursor-pointer magic-link font-[400] text-[18px] text-white my-auto mx-5">
                <Link href="/#contact">{t("Navbar:contact")}</Link>
              </li>
              <li
                className={`flex lg:hidden mr-10 ml-auto ${
                  isOpen ? "hidden" : ""
                }`}
              >
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  color="white"
                  size={20}
                />
              </li>
              <li className="mr-10 ml-[1rem] hidden lg:flex">
                <LanguageDropdown></LanguageDropdown>
              </li>
            </ul>
          </nav>
          {/* ------------ MOBILE MENU ----------- */}

          <nav
            className={`flex flex-col bg-navbarBlack w-[100vw] h-[100vh] top-0 left-0 fixed z-[201] overflow-hidden mobile-menu transition-transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex flex-row w-full justify-between px-[10%] py-10">
              <span
                onClick={toggleMobileMenu}
                className="flex flex-row w-fit my-auto uppercase text-white text-[0.8rem] cursor-pointer"
              >
                <img
                  src="/assets/x_mark.svg"
                  alt="Close menu"
                  className="w-[12px] my-auto mr-2"
                />
                {t("Navbar:close_menu")}
              </span>
            </div>

            <ul className="flex flex-col justify-center mx-auto mt-[1rem]">
              <li className="cursor-pointer magic-link font-[400] text-[1.085rem] text-white mx-auto my-3">
                <Link onClick={toggleMobileMenu} href="/">
                  {t("Navbar:home")}
                </Link>
              </li>
              <li className="cursor-pointer magic-link font-[400] text-[1.085rem] text-white mx-auto my-3">
                <Link onClick={toggleMobileMenu} href="/services">
                  {t("Navbar:services")}
                </Link>
              </li>
              <li className="cursor-pointer magic-link font-[400] text-[1.085rem] text-white mx-auto my-3">
                <Link onClick={toggleMobileMenu} href="/#about">
                  {t("Navbar:about")}
                </Link>
              </li>
              <li className="cursor-pointer magic-link font-[400] text-[1.085rem] text-white mx-auto my-3">
                <Link onClick={toggleMobileMenu} href="/#our-work">
                  {t("Navbar:our_work")}
                </Link>
              </li>
              <li className="cursor-pointer magic-link font-[400] text-[1.085rem] text-white mx-auto my-3">
                <Link onClick={toggleMobileMenu} href="/#contact">
                  {t("Navbar:contact")}
                </Link>
              </li>
              <li className="mx-auto my-3 flex">
                <LanguageDropdown></LanguageDropdown>
              </li>
            </ul>
            <div className="green-separator h-[1px] w-[80vw] mx-auto mt-[3rem]"></div>
            <span className="text-white text-center text-[0.8rem] mt-[3rem] mb-3">
              {" "}
              {t("Navbar:write_us")}
            </span>
            <a
              className="flex flex-row mx-auto text-center text-[0.8rem] mb-10"
              href="mailto:info@lizardprojects.com"
            >
              <img
                src="/assets/mail_icon.svg"
                alt="mail icon"
                className="mx-3 ml-auto w-[15px]"
              />
              info@lizardprojects.com
            </a>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
