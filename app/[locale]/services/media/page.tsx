import React from "react";

import AreYouReady from "@/app/components/AreYouReady";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["mediaPage"];

//@ts-ignore
export default async function graphicsDesignPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "Home",
    "ContactForm",
    "Navbar",
    "Services",
    "Footer",
    "AreYouReady",
    "mediaPage",
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
              {t("mediaPage:title")}
            </h1>
            <p className="max-w-[1000px] py-5 leading-[200%]">
              {t("mediaPage:text1")}
            </p>
          </div>

          <svg
            className="flex order-1 mx-auto max-w-[100px] lg:max-w-[200px] lg:order-2 lg:w-auto mt-16 mb-auto lg:ml-16 lg:mr-0 h-fit"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 406.639 406.639"
          >
            <g>
              <g>
                <path
                  d="M282.443,357.792h-43.217c-1.561,0-2.836-1.273-2.836-2.834v-9.518c0-1.56-1.275-2.834-2.834-2.834h-60.474
			c-1.56,0-2.835,1.274-2.835,2.834v9.518c0,1.561-1.275,2.834-2.835,2.834h-43.219c-1.56,0-2.835,1.275-2.835,2.834v12.17
			c0,1.559,1.275,2.834,2.835,2.834h158.248c1.561,0,2.836-1.275,2.836-2.834v-12.17
			C285.277,359.067,284.002,357.792,282.443,357.792z"
                />
                <path
                  d="M383.855,31.009H22.783C10.22,31.009,0,41.23,0,53.793v250.921c0,12.562,10.221,22.783,22.783,22.783h361.073
			c12.562,0,22.783-10.221,22.783-22.783V53.794C406.639,41.23,396.418,31.009,383.855,31.009z M203.318,307.825
			c-5.668,0-10.264-4.596-10.264-10.266s4.596-10.266,10.264-10.266c5.67,0,10.268,4.596,10.268,10.266
			S208.988,307.825,203.318,307.825z M389.396,276.243H17.242V53.794c0-3.003,2.537-5.54,5.541-5.54h361.073
			c3.002,0,5.541,2.537,5.541,5.54V276.243L389.396,276.243z"
                />
                <path
                  d="M236.299,166.933l-48.565-31.637c-1.441-0.854-2.619-0.182-2.619,1.493v63.392c0,1.674,1.178,2.346,2.619,1.493
			l48.565-31.637C237.738,169.183,237.738,167.786,236.299,166.933z"
                />
                <path
                  d="M203.319,101.757c-36.794,0-66.729,29.934-66.729,66.728c0,36.793,29.935,66.728,66.729,66.728
			c36.794,0,66.728-29.935,66.728-66.728C270.047,131.691,240.113,101.757,203.319,101.757z M203.319,221.213
			c-29.074,0-52.729-23.653-52.729-52.728s23.654-52.728,52.729-52.728c29.076,0,52.728,23.654,52.728,52.728
			S232.393,221.213,203.319,221.213z"
                />
              </g>
            </g>
          </svg>
        </div>

        <h2 className="font-[600] mt-[5em] text-[1.2em] justify-center mx-auto">
          {t("mediaPage:text2")}
        </h2>
        <ul className="list-disc my-10 justify-center mx-auto">
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">{t("mediaPage:text3")}</h3>
          </li>
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">{t("mediaPage:text4")}</h3>
          </li>
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">{t("mediaPage:text5")}</h3>
          </li>
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">{t("mediaPage:text6")}</h3>
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
    title: t("MetaData:Media:title"),
    description: t("MetaData:Media:description"),
    keywords: t("MetaData:Media:keywords"),
    canonical: websiteUrl, // Rel canonical URL
    openGraph: {
      url: websiteUrl,
      title: t("MetaData:Media:title"),
      description: t("MetaData:Media:description"),
      images: [
        {
          url: ogImageUrl,
          alt: t("MetaData:Media:description"),
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