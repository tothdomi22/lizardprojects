"use client";

import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';

const AreYouReady = () => {
  const { t } = useTranslation("AreYouReady");

  return (
    <div className="flex flex-col w-full bg-serviceBlack text-white text-center px-5 py-[5em]">
        <h4 className='my-5 font-[600] text-[1.5em]'>{t("AreYouReady:title")}</h4>
        <p className="lg:max-w-[70%] mx-auto leading-[200%]">{t("AreYouReady:text1")}</p>
        <p className="my-5">{t("AreYouReady:text2")}</p>
        <Link className="send-button mx-auto my-5" href="/#contact">{t("AreYouReady:contact")}</Link>
    </div>
  )
}

export default AreYouReady
