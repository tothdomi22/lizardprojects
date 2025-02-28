import AreYouReady from "@/app/components/AreYouReady";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import React from "react";

const i18nNamespaces = ["onlineMarketingPage"];

//@ts-ignore
export default async function onlineMarketingPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "Home",
    "ContactForm",
    "Navbar",
    "Services",
    "Footer",
    "AreYouReady",
    "onlineMarketingPage",
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
              {t("onlineMarketingPage:title")}
            </h1>
            <p className="max-w-[1000px] py-5 leading-[200%]">
              {t("onlineMarketingPage:text1")}
            </p>
          </div>

          <svg
            className="flex order-1 mx-auto max-w-[100px] lg:max-w-[200px] lg:order-2 lg:w-auto mt-16 mb-auto lg:ml-16 lg:mr-0 h-fit"
            fill="white"
            height="800px"
            width="800px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <path
                  d="M485.083,36.653H26.917C12.075,36.653,0,48.728,0,63.571V448.43c0,14.842,12.075,26.917,26.917,26.917h458.166
			c14.842,0,26.917-12.075,26.917-26.917V63.571C512,48.728,499.925,36.653,485.083,36.653z M127.141,53.834h331.025v19.472H127.141
			V53.834z M90.488,53.834h19.472v19.472H90.488V53.834z M53.834,53.834h19.472v19.472H53.834V53.834z M17.181,63.571
			c0-5.369,4.367-9.736,9.736-9.736h9.736v19.472H17.181V63.571z M494.819,448.43c0,5.369-4.367,9.736-9.736,9.736H26.917
			c-5.369,0-9.736-4.367-9.736-9.736V90.488h477.638V448.43z M494.819,73.306h-19.472V53.834h9.736c5.369,0,9.736,4.367,9.736,9.736
			V73.306z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M466.756,109.96H45.244c-4.744,0-8.591,3.846-8.591,8.591c0,4.744,3.846,8.591,8.591,8.591h421.512
			c4.744,0,8.591-3.846,8.591-8.591C475.347,113.806,471.5,109.96,466.756,109.96z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M329.307,164.94H310.98c-7.907,0-14.617,5.198-16.907,12.353c-73.698,43.017-153.528,50.3-176.506,51.508
			c-9.404,0.496-16.77,8.28-16.77,17.724v37.276c0,9.444,7.366,17.228,16.77,17.723c4.579,0.241,11.426,0.725,20.023,1.684
			l25.813,94.901c2.097,7.71,9.142,13.094,17.132,13.094h29.617c0.009,0,0.018,0.002,0.028,0.002c0.011,0,0.023-0.002,0.033-0.002
			h9.135c4.744,0,8.591-3.846,8.591-8.591s-3.846-8.591-8.591-8.591h-2.601l-21.958-80.51c30.325,7.555,65.45,19.772,99.284,39.52
			c2.291,7.156,9.002,12.353,16.907,12.353h18.327c9.79,0,17.754-7.964,17.754-17.754v-164.94
			C347.06,172.904,339.096,164.94,329.307,164.94z M137.45,285.916c-8.077-0.864-14.548-1.316-18.981-1.55
			c-0.29-0.015-0.491-0.247-0.491-0.565v-37.276c0-0.317,0.202-0.55,0.491-0.566c4.433-0.234,10.904-0.686,18.981-1.55V285.916z
			 M198.935,394.022h-18.402c-0.258,0-0.486-0.174-0.553-0.423l-23.912-87.914c6.135,0.958,12.744,2.124,19.741,3.542
			L198.935,394.022z M329.879,347.633c0,0.316-0.257,0.573-0.573,0.573H310.98c-0.316,0-0.573-0.257-0.573-0.573V246.838
			c0-4.744-3.846-8.591-8.591-8.591c-4.744,0-8.591,3.846-8.591,8.591v86.016c-50.866-27.553-103.249-39.544-138.595-44.75v-45.881
			c35.346-5.206,87.73-17.197,138.595-44.75v12.712c0,4.744,3.846,8.591,8.591,8.591c4.744,0,8.591-3.846,8.591-8.591v-27.491
			c0-0.316,0.257-0.573,0.573-0.573h18.327c0.316,0,0.573,0.257,0.573,0.573V347.633z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M430.103,256.573h-54.98c-4.744,0-8.591,3.846-8.591,8.591c0,4.744,3.846,8.591,8.591,8.591h54.98
			c4.744,0,8.591-3.846,8.591-8.591C438.694,260.419,434.847,256.573,430.103,256.573z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M419.46,206.343c-2.121-4.244-7.281-5.964-11.525-3.842l-36.653,18.327c-4.244,2.122-5.964,7.281-3.842,11.525
			c1.505,3.009,4.538,4.75,7.69,4.75c1.291,0,2.601-0.292,3.835-0.908l36.653-18.327
			C419.862,215.746,421.582,210.587,419.46,206.343z"
                />
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M415.618,312.46l-36.653-18.327c-4.243-2.121-9.403-0.402-11.525,3.842c-2.122,4.244-0.402,9.404,3.842,11.525
			l36.653,18.327c1.234,0.616,2.544,0.908,3.835,0.908c3.151,0,6.185-1.741,7.69-4.751
			C421.582,319.741,419.862,314.581,415.618,312.46z"
                />
              </g>
            </g>
          </svg>
        </div>

        <h2 className="font-[600] mt-[5em] text-[1.2em] justify-center mx-auto">
          {t("onlineMarketingPage:text2")}
        </h2>
        <ul className="list-disc my-10 justify-center mx-auto">
          <li className="my-6">
            <h3 className="text-[1em] font-[600]">
              {t("onlineMarketingPage:text3")}
            </h3>
          </li>
          <li className="my-6">
            <h3 className="text-[1em] font-[600]">
              {t("onlineMarketingPage:text4")}
            </h3>
          </li>
          <li className="my-6">
            <h3 className="text-[1em] font-[600]">
              {t("onlineMarketingPage:text5")}
            </h3>
          </li>
          <li className="my-6">
            <h3 className="text-[1em] font-[600]">
              {t("onlineMarketingPage:text6")}
            </h3>
          </li>
          <li className="my-6">
            <h3 className="text-[1em] font-[600]">
              {t("onlineMarketingPage:text7")}
            </h3>
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
    title: t("MetaData:Online_Marketing:title"),
    description: t("MetaData:Online_Marketing:description"),
    keywords: t("MetaData:Online_Marketing:keywords"),
    canonical: websiteUrl, // Rel canonical URL
    openGraph: {
      url: websiteUrl,
      title: t("MetaData:Online_Marketing:title"),
      description: t("MetaData:Online_Marketing:description"),
      images: [
        {
          url: ogImageUrl,
          alt: t("MetaData:Online_Marketing:description"),
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
