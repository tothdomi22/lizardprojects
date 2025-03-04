"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";

import i18nConfig from "@/i18nConfig";

const LanguageDropdown: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  useEffect(() => {
    handleChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocale]); // re-run whenever the language changes

  const handleChange = () => {
    // (1) set cookie for next-i18n-router (if you're relying on that)
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "; expires=" + date.toUTCString();
    document.cookie = `NEXT_LOCALE=${currentLocale};expires=${expires};path=/`;

    // (2) strip any existing locale prefix
    //    e.g. /en/some/route -> /some/route
    //         /hu/ -> /
    const strippedPath = currentPathname.replace(/^\/(en|hu|de)/, "");

    // (3) Construct and push the new path based on the locale
    if (currentLocale === i18nConfig.defaultLocale) {
      // If it's the default locale, redirect to path without any prefix
      // (or just "/" if there's no path left).
      router.push(strippedPath || "/");
    } else {
      // Otherwise, prepend the new locale
      router.push(`/${currentLocale}${strippedPath}`);
    }

    // (Optional) Force re-fetch of data for the new locale (if needed)
    router.refresh();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleChangeLanguage = (language: string) => {
    // This will cause `currentLocale` to change,
    // which triggers useEffect -> handleChange
    i18n.changeLanguage(language);
    setDropdownOpen(false); // close the dropdown
  };

  return (
    <div className="relative inline-block text-white">
      <button
        className="bg-transparent px-4 py-2 rounded-md focus:outline-none flex flex-row"
        onClick={toggleDropdown}
      >
        {/* Show flag depending on current locale */}
        {currentLocale === "hu" && (
          <img
            src="/assets/flag_hu.svg"
            alt="Magyar"
            className="w-[1.5em] h-[1.5em] m-auto"
          />
        )}
        {currentLocale === "de" && (
          <img
            src="/assets/flag_ger.svg"
            alt="Deutsch"
            className="w-[1.5em] h-[1.5em] m-auto"
          />
        )}
        {currentLocale === "en" && (
          <img
            src="/assets/flag_uk.svg"
            alt="English"
            className="w-[1.5em] h-[1.5em] m-auto"
          />
        )}
        <span className="ml-4 my-auto">
          <svg
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.61753 7.93248C7.10562 8.39437 7.89828 8.39437 8.38637 7.93248L14.6339 2.0203C15.122 1.55841 15.122 0.808305 14.6339 0.346417C14.1458 -0.115472 13.3532 -0.115472 12.8651 0.346417L7.5 5.4235L2.13491 0.350111C1.64682 -0.111777 0.854158 -0.111777 0.366068 0.350111C-0.122023 0.812 -0.122023 1.56211 0.366068 2.024L6.61363 7.93617L6.61753 7.93248Z"
              fill="white"
            />
          </svg>
        </span>
      </button>

      {/* Dropdown content */}
      <div
        className={`absolute ${
          isDropdownOpen ? "block" : "hidden"
        } bg-[#0000007e] backdrop-blur-md text-white border border-[#ffffff75] mt-2`}
      >
        <button
          className="block w-full text-left px-4 py-2 hover:bg-lighterGreen hover:text-black"
          onClick={() => handleChangeLanguage("hu")}
          title="Magyar"
        >
          <img
            src="/assets/flag_hu.svg"
            alt="Magyar"
            className="w-[1.5em] h-[1.5em] m-auto"
          />
        </button>
        <button
          className="block w-full text-left px-4 py-2 hover:bg-lighterGreen hover:text-black"
          onClick={() => handleChangeLanguage("de")}
          title="Deutsch"
        >
          <img
            src="/assets/flag_ger.svg"
            alt="Deutsch"
            className="w-[1.5em] h-[1.5em] m-auto"
          />
        </button>
        <button
          className="block w-full text-left px-4 py-2 hover:bg-lighterGreen hover:text-black"
          onClick={() => handleChangeLanguage("en")}
          title="English"
        >
          <img
            src="/assets/flag_uk.svg"
            alt="English"
            className="w-[1.5em] h-[1.5em] m-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default LanguageDropdown;
