import AreYouReady from "@/app/components/AreYouReady";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import React from "react";

const i18nNamespaces = ["graphicsDesignPage"];

//@ts-ignore
export default async function graphicsDesignPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "Home",
    "ContactForm",
    "Navbar",
    "Services",
    "Footer",
    "AreYouReady",
    "graphicsDesignPage",
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
              {t("graphicsDesignPage:title")}
            </h1>
            <p className="max-w-[1000px] py-5 leading-[200%]">
              {t("graphicsDesignPage:text1")}
            </p>
          </div>

          <svg
            className="flex order-1 mx-auto max-w-[100px] lg:max-w-[200px] lg:order-2 lg:w-auto mt-16 mb-auto lg:ml-16 lg:mr-0 h-fit"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 193.831 193.831"
          >
            <g>
              <g>
                <path
                  d="M119.419,94.771c-3.551-2.781,0.036-9.093,2.17-13.25c2.705-5.27,6.194-10.082,9.007-15.286
			c6.666-12.332,3.383-29.713-3.231-41.243c-17.819-31.061-59.112-11.882-79.868,4.402C20.795,50.345,1.468,78.158,0.058,112.926
			c-1.537,37.855,27.99,63.878,64.88,64.047c15.057,0.068,28.898-5.879,42.181-12.303c12.377-5.984,24.644-13.346,33.499-24.051
			C157.755,119.903,140.383,100.979,119.419,94.771z M125.167,147.567c-18.325,14.029-42.936,24.998-66.176,23.949
			c-22.125-0.999-42.664-14.452-50.293-35.37c-6.386-17.511-3.105-37.263,3.363-54.204c6.199-16.235,18.315-29.737,31.051-41.215
			c13.556-12.217,30.803-23.63,49.282-25.987c20.959-2.675,34.491,13.479,35.566,33.294c0.783,14.452-8.782,22.95-13.843,35.443
			c-2.396,5.915-2.872,12.579,1.362,15.498c0.299,0.297,0.682,0.541,1.182,0.685c0.049,0.015,0.098,0.03,0.146,0.044
			c0.542,0.229,1.134,0.413,1.789,0.543c8.854,2.796,17.484,7.26,22.109,15.67C147.385,128.066,133.757,140.991,125.167,147.567z"
                />
                <path
                  d="M101.131,34.277C88.771,22.53,68.023,48.042,80.071,60.422c7.658,7.869,22.238,0.136,26.102-7.946
			C109.84,44.806,107.031,37.517,101.131,34.277z M99.836,51.812c-2.713,4.292-13.401,9.062-16.663,2.996
			c-2.283-4.246,0.704-10.329,3.164-13.753c1.163-1.618,2.455-2.676,3.837-3.339c0.379,0.235,0.84,0.359,1.379,0.307
			c3.839-0.37,7.499-0.067,9.549,3.585C102.912,44.835,101.658,48.93,99.836,51.812z"
                />
                <path
                  d="M52.571,64.276c-1.207-0.107-2.376,0.039-3.492,0.375c-5.768,0.128-9.415,5.714-10.132,11.835
			c-0.473,2.016-0.358,4.041,0.24,5.877c0.086,0.409,0.181,0.815,0.297,1.213c1.383,4.733,5.135,8.396,10.176,8.598
			c7.232,0.289,11.72-6.587,12.791-12.919C63.658,72.125,60.324,64.966,52.571,64.276z"
                />
                <path
                  d="M43.067,103.577c-5.866-3.049-12.084-0.302-15.694,4.809c-3.715,5.26-4.986,12.658-0.016,17.569
			c4.274,4.225,11.477,2.937,15.785-0.449c2.764-2.173,4.428-5.325,4.559-8.521c0.283-0.829,0.49-1.645,0.599-2.419
			C48.937,110.036,47.248,105.75,43.067,103.577z"
                />
                <path
                  d="M59.134,135.775c-0.689,0.663-1.305,1.472-1.854,2.366c-1.831,1.516-3.2,4.124-3.809,6.509
			c-1.138,4.455,0.545,10.198,4.884,12.309c7.618,3.707,17.788-3.7,17.519-11.866C75.623,137.453,65.645,129.51,59.134,135.775z"
                />
                <path
                  d="M175.538,14.614c-0.759-1.065-1.896-1.355-2.918-1.147c-0.922-0.297-2.009-0.088-2.427,0.891
			c-5.996,14.02-33.74,42.598-13.197,55.714c1.844,1.177,3.788,2.03,5.772,2.642c-0.195,1.899-0.174,3.852-0.32,5.318
			c-1.157,11.555-0.937,23.534-0.65,35.13c0.589,23.815,2.22,47.591,8.197,70.731c0.423,1.636,3.009,2.159,3.789,0.495
			c7.41-15.813,7.801-32.974,7.571-50.133c-0.279-20.873-0.405-41.709-1.812-62.543c4.711-2.056,8.81-5.567,11.44-10.303
			C200.283,44.669,184.594,27.33,175.538,14.614z M163.105,58.482c-0.535,2.266-0.984,4.77-3.235,2.566
			c-4.208-4.122-2.424-10.393-0.697-15.202c1.019-2.834,2.416-5.684,4.027-8.474c0.447-0.719,0.876-1.41,1.258-2.048
			c0.122-0.204,0.254-0.412,0.379-0.617C163.885,42.5,164.842,51.12,163.105,58.482z M165.859,96.955
			c0.059-4.545,0.164-9.09,0.33-13.628c0.102-2.79,0.149-5.519,0.138-8.308c-0.002-0.492,0.005-0.981,0.011-1.47
			c3.017,0.435,6.063,0.26,8.984-0.426c0.501,7.65,0.812,15.297,1.047,22.947c-0.25,0.039-0.51,0.112-0.778,0.247
			C172.552,97.846,168.944,98.425,165.859,96.955z"
                />
              </g>
            </g>
          </svg>
        </div>

        <h2 className="font-[600] mt-[5em] text-[1.2em] justify-center mx-auto">
          {t("graphicsDesignPage:text2")}
        </h2>
        <ul className="list-disc my-10 justify-center mx-auto">
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text3")}
            </h3>
          </li>
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text4")}
            </h3>
          </li>
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text5")}
            </h3>
          </li>
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text6")}
            </h3>
          </li>
          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text7")}
            </h3>
          </li>

          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text8")}
            </h3>
          </li>

          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text9")}
            </h3>
          </li>

          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text10")}
            </h3>
          </li>

          <li className="my-6 ml-5">
            <h3 className="text-[1em] font-[600]">
              {t("graphicsDesignPage:text11")}
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
    title: t("MetaData:Graphic_Design:title"),
    description: t("MetaData:Graphic_Design:description"),
    keywords: t("MetaData:Graphic_Design:keywords"),
    canonical: websiteUrl, // Rel canonical URL
    openGraph: {
      url: websiteUrl,
      title: t("MetaData:Graphic_Design:title"),
      description: t("MetaData:Graphic_Design:description"),
      images: [
        {
          url: ogImageUrl,
          alt: t("MetaData:Graphic_Design:description"),
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
