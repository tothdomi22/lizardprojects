import React from "react";

import TranslationsProvider from "@/app/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import Link from "next/link";

const i18nNamespaces = ["cookiePolicy"];

//@ts-ignore
export default async function cookiePolicyPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "Home",
    "ContactForm",
    "Navbar",
    "Services",
    "Footer",
    "AreYouReady",
    "cookiePolicy",
  ]);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col bg-serviceBlack text-white pt-[10em] min-h-[100vh] px-5">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex flex-col order-2 lg:order-1">
            <h1 className="uppercase text-center lg:text-left font-[400] text-[2em] my-4">
              {t("cookiePolicy:title")}
            </h1>
            <p className="max-w-[1000px] py-5 leading-[200%]">
              {t("cookiePolicy:text1")}
            </p>
          </div>
        </div>

        <div className="mx-auto">
          <h2 className="font-[600] mt-[5em] text-[1.2em]">
            {t("cookiePolicy:text2")}
          </h2>

          <p className="max-w-[1000px] py-5 leading-[200%]">
            {t("cookiePolicy:text3")}
          </p>
        </div>

        <div className="mx-auto">
          <h2 className="font-[600] mt-[5em] text-[1.2em]">
            {t("cookiePolicy:text4")}
          </h2>

          <p className="max-w-[1000px] py-5 leading-[200%]">
            {t("cookiePolicy:text5")}
          </p>
        </div>

        <div className="mx-auto">
          <h2 className="font-[600] mt-[5em] text-[1.2em]">
            {t("cookiePolicy:text6")}
          </h2>

          <p className="max-w-[1000px] py-5 leading-[200%]">
            {t("cookiePolicy:text7")}
          </p>
        </div>

        <div className="mx-auto mb-[8rem]">
          <h2 className="font-[600] mt-[5em] text-[1.2em]">
            {t("cookiePolicy:text8")}
          </h2>

          <h3 className="max-w-[1000px] font-[600] py-5 leading-[200%]">
            {t("cookiePolicy:text9")}
          </h3>

          <p className="max-w-[1000px] py-5 leading-[200%]">
            {t("cookiePolicy:text10")}
          </p>

          <h3 className="max-w-[1000px] font-[600] py-5 leading-[200%]">
            {t("cookiePolicy:text11")}
          </h3>

          <p className="max-w-[1000px] py-5 leading-[200%]">
            {t("cookiePolicy:text12")}
          </p>

          <p className="max-w-[1000px] py-5 leading-[200%]">
            {t("cookiePolicy:text13")}
          </p>

          <p className="max-w-[1000px] pt-10 leading-[200%]">
            {t("cookiePolicy:text14")}
          </p>

          <Link
            href="https://policies.google.com/technologies/cookies?hl=en-US"
            rel="nofollow"
            target="_blank"
            className="w-full text-center leading-[200%] underline pb-10"
          >
            {t("cookiePolicy:text15")}  🡢
          </Link>

          <p className="max-w-[1000px] pt-24 leading-[200%]">
            {t("cookiePolicy:text16")}
          </p>

          <p className="max-w-[1000px] py-5 leading-[200%]">
            {t("cookiePolicy:text17")}
          </p>

          <Link
            href="mailto:info@lizardprojects.com"
            className="max-w-[1000px]leading-[200%] underline text-lighterGreen"
          >
            info@lizardprojects.com
          </Link>
        </div>
      </main>
    </TranslationsProvider>
  );
}


//@ts-ignore
export async function generateMetadata({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "MetaData",
    "JsonLD",
  ]);

  // Define URLs and descriptions
  const websiteUrl = "https://lizardprojects.com";

  const ogImageUrl = "https://lizardprojects.com/assets/og_image.jpg";
  const summaryCardImageUrl = "https://lizardprojects.com/assets/summary_card.jpg";
  const logoUrl = "https://lizardprojects.com/assets/logo_green.png";



  // JSON-LD structured data
  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": websiteUrl,
    "name": t("JsonLD:Organization:name"),
    "description": t("JsonLD:Organization:description"),
    "logo": logoUrl,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+36204984855",
      "contactType": "Customer Service",
      "areaServed": "Global",
      "availableLanguage": ["English", "Hungarian", "German"]
    },
    "sameAs": [
      "https://www.facebook.com/lizardprojects",
      "https://www.linkedin.com/company/lizardprojects",
      "https://www.instagram.com/lizardprojects",
      "https://www.youtube.com/@lizardprojects"
    ],
    "service": [
      {
        "@type": "Service",
        "name": t("JsonLD:Services:service:name1"),
        "description": t("JsonLD:Services:service:description1")
      },
      {
        "@type": "Service",
        "name": t("JsonLD:Services:service:name2"),
        "description": t("JsonLD:Services:service:description2")
      },
      {
        "@type": "Service",
        "name": t("JsonLD:Services:service:name3"),
        "description": t("JsonLD:Services:service:description3")
      },
      {
        "@type": "Service",
        "name": t("JsonLD:Services:service:name4"),
        "description": t("JsonLD:Services:service:description4")
      },
      {
        "@type": "Service",
        "name": t("JsonLD:Services:service:name5"),
        "description": t("JsonLD:Services:service:description5")
      }
    ]
  };

  return {
    title: t("MetaData:Cookie_Policy:title"),
    description: t("MetaData:Cookie_Policy:description"),
    keywords: t("MetaData:Cookie_Policy:keywords"),
    canonical: websiteUrl, // Rel canonical URL
    openGraph: {
      url: websiteUrl,
      title: t("MetaData:Cookie_Policy:title"),
      description: t("MetaData:Cookie_Policy:description"),
      images: [
        {
          url: ogImageUrl,
          alt: t("MetaData:Cookie_Policy:description"),
        },
      ],
      type: "website",
    },
    jsonLD: jsonLD, // Include JSON-LD structured data
    csp: "default-src 'self'; script-src 'self' https://lizardprojects.com", // Content Security Policy
    referrer: "no-referrer", // Referrer Policy
    language: locale, // Language Tag
    robots: "index, follow", // Robots Meta Tag
  };
}
