import React from "react";

import AreYouReady from "@/app/components/AreYouReady";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["eventOrganizationPage"];

//@ts-ignore
export default async function eventOrganizationPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "Home",
    "ContactForm",
    "Navbar",
    "Services",
    "Footer",
    "AreYouReady",
    "eventOrganizationPage",
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
              {t("eventOrganizationPage:title")}
            </h1>
            <p className="max-w-[1000px] py-5 leading-[200%]">
              {t("eventOrganizationPage:opening_text")}
            </p>
          </div>

          <svg
            className="flex order-1 mx-auto max-w-[100px] lg:max-w-[200px] lg:order-2 lg:w-auto mt-16 mb-auto lg:ml-16 lg:mr-0 h-fit"
            fill="white"
            width="800px"
            height="800px"
            viewBox="0 0 253 260"
          >
            <path
              d="M194.221,2c-5.959,0-10.814,4.855-10.814,10.814V46.8c0,5.959,4.855,10.814,10.814,10.814s10.814-4.855,10.814-10.814
	V12.814C205.035,6.855,200.179,2,194.221,2 M250.938,33.338v57.159V258H2V90.276V33.338h33.766v13.683
	c0,12.579,10.152,22.952,22.952,22.952C71.297,69.972,81.669,59.6,81.669,47.021V33.338h89.6v13.683
	c0,12.579,10.372,22.952,22.952,22.952c12.579,0,22.952-10.372,22.952-22.952V33.338H250.938z M237.476,90.497H15.462v153.6h172.579
	l49.434-48.772V90.497H237.476z M58.717,2c-5.958,0-10.814,4.855-10.814,10.814V46.8c0,5.959,4.855,10.814,10.814,10.814
	c5.959,0,10.814-4.855,10.814-10.814V12.814C69.531,6.855,64.676,2,58.717,2 M194.221,2c-5.959,0-10.814,4.855-10.814,10.814V46.8
	c0,5.959,4.855,10.814,10.814,10.814s10.814-4.855,10.814-10.814V12.814C205.035,6.855,200.179,2,194.221,2 M114.175,222.938
	l-53.158-53.159l21.213-21.213l31.976,31.976l59.594-59.423l21.184,21.244L114.175,222.938z"
            />
          </svg>
        </div>

        <h2 className="font-[600] mt-[5em] text-[1.2em] justify-center mx-auto">
          {t("eventOrganizationPage:sub_title")}
        </h2>
        <ul className="list-disc my-10 justify-center mx-auto lg:max-w-[60%]">
          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text1")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text2")}</p>
          </li>
          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text3")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text4")}</p>
          </li>
          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text5")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text6")}</p>
          </li>
          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text7")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text8")}</p>
          </li>

          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text9")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text10")}</p>
          </li>

          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text11")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text12")}</p>
          </li>

          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text13")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text14")}</p>
          </li>

          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text15")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text16")}</p>
          </li>

          <li className="my-16 ml-5">
            <h3 className="text-[1em] font-[600] my-3">
              {t("eventOrganizationPage:text17")}
            </h3>
            <p className="leading-[200%]">{t("eventOrganizationPage:text18")}</p>
          </li>


        </ul>
      </main>
      <AreYouReady></AreYouReady>
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
    title: t("MetaData:Event_Organization:title"),
    description: t("MetaData:Event_Organization:description"),
    keywords: t("MetaData:Event_Organization:keywords"),
    canonical: websiteUrl, // Rel canonical URL
    openGraph: {
      url: websiteUrl,
      title: t("MetaData:Event_Organization:title"),
      description: t("MetaData:Event_Organization:description"),
      images: [
        {
          url: ogImageUrl,
          alt: t("MetaData:Event_Organization:description"),
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
