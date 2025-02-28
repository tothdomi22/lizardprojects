import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import React from "react";
import Image from "next/image";
import AreYouReady from "@/app/components/AreYouReady";

const i18nNamespaces = ["webDevPage"];

//@ts-ignore
export default async function webDevPage({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "WebDev_page",
    "Navbar",
    "Home",
    "Services",
    "AreYouReady",
  ]);

  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      alt: "HTML Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      alt: "CSS3 Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
      alt: "SASS Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      alt: "JavaScript Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      alt: "Python Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      alt: "PHP Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      alt: "Next.js Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      alt: "React Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      alt: "Node.js Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      alt: "Tailwind CSS Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      alt: "TypeScript Logo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg",
      alt: "WordPress Logo",
    },
  ];

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col bg-serviceBlack text-white pt-[10em] px-5">
        <div className="flex flex-col lg:flex-row justify-center m-auto">
          <div className="flex order-2 lg:order-1 flex-col mt-5 lg:max-w-[60vw]">
            <h1 className="uppercase font-[400] text-[2em] my-4">
              {t("WebDev_page:title")}
            </h1>
            <h2 className="font-[600]">{t("WebDev_page:text1")}</h2>
            <p className="mt-10 leading-[200%]">{t("WebDev_page:text2")}</p>
            <p className="my-10 leading-[200%]">{t("WebDev_page:text3")}</p>
          </div>

          <svg
            className="flex order-1 mx-auto max-w-[100px] lg:max-w-[200px] lg:order-2 lg:w-auto mt-16 mb-auto lg:ml-16 lg:mr-0 h-fit"
            viewBox="0 0 510 409"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51 76.6875C51 48.4889 73.8703 25.5625 102 25.5625H408C436.13 25.5625 459 48.4889 459 76.6875V281.188H408V76.6875H102V281.188H51V76.6875ZM0 322.088C0 313.62 6.85313 306.75 15.3 306.75H494.7C503.147 306.75 510 313.62 510 322.088C510 355.958 482.588 383.438 448.8 383.438H61.2C27.4125 383.438 0 355.958 0 322.088ZM223.922 166.955L199.219 191.719L223.922 216.482C231.413 223.991 231.413 236.134 223.922 243.563C216.431 250.992 204.319 251.072 196.908 243.563L158.658 205.219C151.167 197.71 151.167 185.568 158.658 178.139L196.908 139.795C204.398 132.286 216.511 132.286 223.922 139.795C231.333 147.304 231.413 159.446 223.922 166.875V166.955ZM313.172 139.795L351.422 178.139C358.913 185.648 358.913 197.79 351.422 205.219L313.172 243.563C305.681 251.072 293.569 251.072 286.158 243.563C278.747 236.054 278.667 223.912 286.158 216.482L310.861 191.719L286.158 166.955C278.667 159.446 278.667 147.304 286.158 139.875C293.648 132.446 305.761 132.366 313.172 139.875V139.795Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="flex flex-col my-5 mx-auto">
            <h3 className="font-[500] text-[1.3em] uppercase my-5">
              {t("WebDev_page:text4")}
            </h3>
            <ol className="my-10 list-none">
              <li className="mt-5 mx-auto w-fit flex flex-col md:flex-row  items-center text-[1.1em] border border-[#ffffff41] rounded-[20px] p-5">
                1. {t("WebDev_page:text5")}
                <svg
                  className="mx-auto my-10 md:ml-5"
                  width="64px"
                  height="64px"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-width="3"
                  stroke="white"
                  fill="none"
                >
                  <line x1="50.4" y1="24.38" x2="58.3" y2="23.14" />
                  <line x1="47.93" y1="17.11" x2="52.87" y2="14.2" />
                  <line x1="42.89" y1="11.73" x2="46.21" y2="4.51" />
                  <line x1="33.45" y1="10.69" x2="33.41" y2="4.96" />
                  <line x1="24.29" y1="12.09" x2="21.62" y2="4.51" />
                  <line x1="17.99" y1="17.03" x2="12.96" y2="14.29" />
                  <line x1="15.78" y1="23.97" x2="8.03" y2="22.66" />
                  <path d="M26.22,45.47c0-5.16-3.19-9.49-4.91-12.69A12.24,12.24,0,0,1,19.85,27c0-6.79,6.21-12.3,13-12.3" />
                  <path d="M39.48,45.47c0-5.16,3.19-9.49,4.91-12.69A12.24,12.24,0,0,0,45.85,27c0-6.79-6.21-12.3-13-12.3" />
                  <rect
                    x="23.63"
                    y="45.19"
                    width="18.93"
                    height="4.25"
                    rx="2.12"
                  />
                  <rect
                    x="24.79"
                    y="49.43"
                    width="16.61"
                    height="4.25"
                    rx="2.12"
                  />
                  <path d="M36.32,53.68v.84a3.23,3.23,0,1,1-6.44,0v-.84" />
                  <path d="M24.57,26.25a7.5,7.5,0,0,1,7.88-7.11" />
                </svg>
              </li>


              <li className="mt-5 mx-auto w-fit flex flex-col md:flex-row items-center text-[1.1em] border border-[#ffffff41] rounded-[20px] p-5">
                2. {t("WebDev_page:text6")}
                <svg
                  className="mx-auto my-10 md:ml-5"
                  height="64px"
                  width="64px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="white"
                  stroke="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="2.048"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <style type="text/css"> </style>{" "}
                    <g>
                      {" "}
                      <path
                        className="st0"
                        d="M133.977,245.743c4.662,1.718,9.756,2.564,15.006,2.315c7.873-0.355,15.159-3.118,21.05-7.512 c5.9-4.4,10.456-10.425,13.043-17.428c1.73-4.668,2.564-9.759,2.319-15.007c-0.355-7.873-3.119-15.162-7.513-21.05 c-4.398-5.894-10.432-10.457-17.431-13.052c-4.662-1.718-9.757-2.558-15-2.315c-7.877,0.361-15.162,3.118-21.056,7.513 c-5.894,4.406-10.454,10.432-13.043,17.434c-1.73,4.662-2.565,9.76-2.319,15c0.358,7.88,3.118,15.162,7.516,21.057 C120.944,238.585,126.981,243.154,133.977,245.743z M127.056,197.617c2.368-3.883,5.854-7.064,9.986-9.037 c2.755-1.307,5.798-2.117,9.084-2.266c4.92-0.224,9.458,1.033,13.351,3.411c3.884,2.365,7.061,5.85,9.034,9.984 c1.317,2.751,2.12,5.788,2.269,9.081c0.224,4.923-1.036,9.455-3.405,13.351c-2.372,3.89-5.856,7.058-9.99,9.038 c-2.754,1.313-5.794,2.116-9.078,2.265c-4.926,0.224-9.464-1.045-13.36-3.404c-3.881-2.378-7.058-5.857-9.031-9.99 c-1.316-2.752-2.119-5.795-2.268-9.075C123.427,206.045,124.688,201.508,127.056,197.617z"
                      ></path>{" "}
                      <path d="M297.863,404.415c0.766,16.575,14.829,29.397,31.414,28.625c16.575-0.759,29.396-14.826,28.628-31.407 c-0.766-16.582-14.83-29.403-31.408-28.631C309.916,373.767,297.094,387.828,297.863,404.415z"></path>{" "}
                      <path d="M240.495,392.16c-14.873,0.691-26.375,13.308-25.687,28.183c0.688,14.875,13.307,26.378,28.18,25.687 c14.872-0.691,26.375-13.307,25.687-28.177C267.987,402.977,255.367,391.476,240.495,392.16z"></path>{" "}
                      <path d="M158.858,406.301c13.248-0.61,23.49-11.845,22.877-25.096c-0.612-13.245-11.847-23.49-25.096-22.873 c-13.251,0.616-23.49,11.85-22.88,25.096C134.373,396.679,145.607,406.918,158.858,406.301z"></path>{" "}
                      <path d="M100.317,314.906c0.479,10.363,9.265,18.367,19.631,17.888c10.357-0.473,18.377-9.261,17.898-19.624 c-0.479-10.363-9.274-18.368-19.634-17.894C107.848,295.76,99.837,304.536,100.317,314.906z"></path>{" "}
                      <path d="M281.761,259.872l-0.2-0.622l-30.75-21.686l-0.647,0.019c-15.48,0.342-31.808,10.052-42.604,25.369 c-10.239,14.527-15.147,29.534-19.896,44.049c-3.24,9.896-6.588,20.141-11.623,30.224c-4.167,8.353-6.656,11.466-6.663,11.478 l-2.549,3.025l2.813,1.189c13.083,5.521,31.846,4.021,51.471-4.089c20.617-8.515,38.758-22.843,51.075-40.308 C282.99,293.202,286.653,274.567,281.761,259.872z M254.194,314.595c-0.564,0.454-1.161,0.946-1.777,1.506 c-6.881,6.187-14.699,4.954-8.446-6.573c6.264-11.527-1.995-13.855-9.93-5.77c-9.952,10.139-13.239,3.541-10.995-1.631 c2.238-5.16,8.947-12.698,4.559-16.4c-2.645-2.228-6.937,2.116-13.678,8.134c-3.858,3.454-11.782,3.554-6.909-10.114 c2.363-5.154,5.138-10.182,8.608-15.112c7.529-10.686,18.981-17.913,29.926-18.909l26.335,18.56 c2.744,10.644-0.221,23.851-7.758,34.55C261.227,306.932,257.888,310.879,254.194,314.595z"></path>{" "}
                      <path d="M268.634,229.883l14.185,9.99c4.36,3.088,10.451,3.318,16.821,0.666c6.37-2.664,12.476-7.985,16.886-14.72 l19.973-30.516l-43.905-30.965l-22.033,29.066c-4.871,6.417-7.824,13.955-8.192,20.851 C262.002,221.151,264.273,226.802,268.634,229.883z"></path>{" "}
                      <path d="M437.779,35.316c8.269-12.635,8.325-27.063,0.146-32.838l-0.108-0.062c-8.182-5.77-21.747-0.872-30.869,11.166 L300.43,154.011l43.162,30.43L437.779,35.316z"></path>{" "}
                      <path d="M486.476,270.708l-0.093-2.21c-0.754-16.319-3.79-30.809-9.022-43.071 c-4.901-11.514-11.688-21.006-20.179-28.22c-5.256-4.481-11.11-8.017-17.399-10.5c-7.009-2.764-14.368-4.17-21.875-4.17 c-0.902,0-1.792,0.019-2.689,0.062c-7.186,0.336-14.06,1.948-20.43,4.798c-6.551,2.95-12.131,7.008-16.582,12.069 c-9.405,10.699-22.086,18.367-36.175,22.301l-9.508,14.521c-2.847,4.351-6.245,8.185-9.918,11.584 c0.918-0.025,1.836-0.025,2.76-0.068c27.274-1.264,52.868-13.314,70.218-33.057c2.207-2.508,5.21-4.668,8.683-6.236 c3.666-1.643,7.82-2.608,12.028-2.794l1.618-0.031c5.266,0,10.392,1.126,15.24,3.348c6.016,2.776,11.304,7.114,15.719,12.903 c3.38,4.444,6.215,9.703,8.428,15.635c3.398,9.088,5.408,19.849,5.972,31.998l0.078,2.03c1.366,41.708-9.268,82.42-30.75,117.724 c-21.056,34.562-51.231,61.992-87.266,79.314c-24.906,11.969-51.717,18.704-79.688,20.004c-3.262,0.149-6.508,0.224-9.735,0.224 c-38.058,0-75.334-10.463-107.796-30.268c-34.513-21.056-61.946-51.393-79.336-87.742c-11.988-25.034-18.722-51.934-20.02-79.937 c-2.094-45.56,10.643-89.46,36.834-126.96c25.155-36,62.068-64.146,103.934-79.252c2.312-0.834,5.141-1.357,7.955-1.475 c0.516-0.025,1.039-0.038,1.565-0.038c3.283,0,6.601,0.486,9.585,1.407c3.622,1.096,6.847,2.838,9.33,5.041 c1.734,1.544,3.125,3.293,4.258,5.353c1.702,3.156,2.633,6.803,2.848,11.16c0.142,3.124-0.109,6.541-0.757,10.158 c-0.407,2.334-0.914,4.78-1.488,7.544c-0.554,2.67-1.136,5.478-1.665,8.44c-0.884,5.004-1.855,11.696-1.512,19.134 c0.934,20.253,7.805,39.517,19.874,55.706c1.254,1.68,2.577,3.292,3.924,4.886c0.719-9.124,4.12-18.399,9.628-26.726 c-0.93-1.631-1.976-3.187-2.788-4.892c-4.506-9.411-7.036-19.525-7.525-30.044c-0.187-3.996,0.19-8.446,1.189-14.017 c0.426-2.44,0.949-4.973,1.565-7.93c0.532-2.57,1.086-5.259,1.587-8.06c0.94-5.291,1.304-10.425,1.08-15.28 c-0.376-8.639-2.769-16.712-6.924-23.346c-3.759-6.056-9.146-11.191-15.573-14.845c-3.796-2.178-7.976-3.865-12.421-5.022 c-4.624-1.195-9.435-1.805-14.3-1.805c-0.853,0-1.702,0.019-2.54,0.056c-5.262,0.256-10.226,1.208-14.751,2.839 C134.696,79.894,94.915,110.237,66.625,150.7c-29.166,41.69-43.336,90.549-40.98,141.295 c2.126,46.158,17.792,90.082,45.309,127.022c26.851,36.013,63.241,63.256,105.229,78.773c25.525,9.43,52.336,14.21,79.685,14.21 c3.6,0,7.214-0.081,10.848-0.255c31.087-1.438,60.913-8.926,88.644-22.258c26.736-12.846,50.478-30.598,70.567-52.762 C466.998,391.463,488.499,332.501,486.476,270.708z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </li>



              <li className="mt-5 mx-auto w-fit flex flex-col md:flex-row items-center text-[1.1em] border border-[#ffffff41] rounded-[20px] p-5">
                3. {t("WebDev_page:text7")}
                <svg
                  className="mx-auto my-10 md:ml-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="64px"
                  height="64px"
                  viewBox="0 0 32 32"
                  fill="white"
                >
                  <style type="text/css"></style>
                  <path
                    d="M22,29.5c0,0.276-0.224,0.5-0.5,0.5h-11c-0.276,0-0.5-0.224-0.5-0.5c0-0.276,0.224-0.5,0.5-0.5H12v-2h8v2
	h1.5C21.776,29,22,29.224,22,29.5z M32,7v16c0,1.657-1.343,3-3,3H3c-1.657,0-3-1.343-3-3V7c0-1.657,1.343-3,3-3h26
	C30.657,4,32,5.343,32,7z M10,9.5c0,0.276,0.224,0.5,0.5,0.5h10c0.276,0,0.5-0.224,0.5-0.5C21,9.224,20.776,9,20.5,9h-10
	C10.224,9,10,9.224,10,9.5z M16.5,11h-5c-0.276,0-0.5,0.224-0.5,0.5c0,0.276,0.224,0.5,0.5,0.5h5c0.276,0,0.5-0.224,0.5-0.5
	C17,11.224,16.776,11,16.5,11z M9.5,11h-2C7.224,11,7,11.224,7,11.5C7,11.776,7.224,12,7.5,12h2c0.276,0,0.5-0.224,0.5-0.5
	C10,11.224,9.776,11,9.5,11z M6,9.5C6,9.776,6.224,10,6.5,10h2C8.776,10,9,9.776,9,9.5C9,9.224,8.776,9,8.5,9h-2
	C6.224,9,6,9.224,6,9.5z M9,19.5C9,19.224,8.776,19,8.5,19h-2C6.224,19,6,19.224,6,19.5C6,19.776,6.224,20,6.5,20h2
	C8.776,20,9,19.776,9,19.5z M10,17.5c0-0.276-0.224-0.5-0.5-0.5h-2C7.224,17,7,17.224,7,17.5C7,17.776,7.224,18,7.5,18h2
	C9.776,18,10,17.776,10,17.5z M22,15.5c0-0.276-0.224-0.5-0.5-0.5h-13C8.224,15,8,15.224,8,15.5C8,15.776,8.224,16,8.5,16h13
	C21.776,16,22,15.776,22,15.5z M22,13.5c0-0.276-0.224-0.5-0.5-0.5h-13C8.224,13,8,13.224,8,13.5C8,13.776,8.224,14,8.5,14h13
	C21.776,14,22,13.776,22,13.5z"
                  />
                </svg>
              </li>



              <li className="mt-5 mx-auto w-fit flex flex-col md:flex-row items-center text-[1.1em] border border-[#ffffff41] rounded-[20px] p-5">
                4. {t("WebDev_page:text9")}
                <svg
                  className="mx-auto my-10 md:ml-5"
                  fill="white"
                  width="64px"
                  height="64px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.95305171,17.9846747 C8.72737466,19.1334216 7.71488744,20 6.5,20 L4.5,20 C4.22385763,20 4,19.7761424 4,19.5 L4,17.5 C4,16.2851126 4.86657841,15.2726253 6.0153253,15.0469483 L6.02714614,14.7041437 C6.04713299,14.1245251 6.10682628,13.555636 6.20352226,13 L2.5,13 C2.1462677,13 1.90438878,12.6427369 2.03576165,12.3143047 L4.03576165,7.31430466 C4.11169333,7.12447547 4.29554771,7 4.5,7 L9,7 C9.02538451,7 9.05032719,7.00189166 9.07469478,7.0055417 C11.4290981,4.32146349 14.9247139,2.67696313 18.771296,2.80960389 C19.3819666,2.8306615 19.9902263,2.89709634 20.5910446,3.008359 C20.7946429,3.04606238 20.9539376,3.20535713 20.991641,3.40895537 C21.812186,7.83989855 20.1522623,12.1558183 16.9947249,14.9271075 C16.9982004,14.9509022 17,14.9752409 17,15 L17,19.5 C17,19.7044523 16.8755245,19.8883067 16.6856953,19.9642383 L11.6856953,21.9642383 C11.3572631,22.0956112 11,21.8537323 11,21.5 L11,17.7949378 C10.4368132,17.8936903 9.86739064,17.9531458 9.29585627,17.9728539 L8.95305171,17.9846747 Z M7.98749247,17.6945992 L6.30540075,16.0125075 C5.56890748,16.1079151 5,16.7375198 5,17.5 L5,19 L6.5,19 C7.26248018,19 7.8920849,18.4310925 7.98749247,17.6945992 L7.98749247,17.6945992 Z M12,17.5770127 L12,20.7614835 L16,19.1614835 L16,15.7132231 C14.8178863,16.5520811 13.4713529,17.1925443 12,17.5770127 L12,17.5770127 Z M6.42079004,12 C6.80202391,10.5414825 7.44257093,9.19144113 8.28872675,8 L4.83851648,8 L3.23851648,12 L6.42079004,12 L6.42079004,12 Z M8.69991595,16.9928092 L9.26139399,16.9734479 C9.82252402,16.9540985 10.3814387,16.8930532 10.9335157,16.7908167 C16.9701904,15.672914 20.9957193,9.95997934 20.0664857,3.93363717 C19.626205,3.86599452 19.1822172,3.82436794 18.7368337,3.80900989 C12.4850041,3.59342956 7.24213247,8.48677642 7.02655214,14.738606 L7.00719083,15.300084 L8.69991595,16.9928092 Z M14,13 C12.3431458,13 11,11.6568542 11,10 C11,8.34314575 12.3431458,7 14,7 C15.6568542,7 17,8.34314575 17,10 C17,11.6568542 15.6568542,13 14,13 Z M14,12 C15.1045695,12 16,11.1045695 16,10 C16,8.8954305 15.1045695,8 14,8 C12.8954305,8 12,8.8954305 12,10 C12,11.1045695 12.8954305,12 14,12 Z" />
                </svg>
              </li>
            </ol>
          </div>

        <div className="flex flex-col mx-auto mt-[5em]">
          <h4 className="text-[1.2em]">{t("WebDev_page:text8")}</h4>

          <ul className="grid grid-cols-3 lg:grid-cols-4 gap-5 py-10 m-auto">
            {logos.map((logo, index) => (
              <li
                key={index}
                className="flex m-auto w-[60px] h-[60px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={50}
                  height={50}
                  layout="responsive"
                />
              </li>
            ))}
          </ul>
        </div>
        <AreYouReady></AreYouReady>
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
    title: t("MetaData:Web_Design_and_Development:title"),
    description: t("MetaData:Web_Design_and_Development:description"),
    keywords: t("MetaData:Web_Design_and_Development:keywords"),
    canonical: websiteUrl, // Rel canonical URL
    openGraph: {
      url: websiteUrl,
      title: t("MetaData:Web_Design_and_Development:title"),
      description: t("MetaData:Web_Design_and_Development:description"),
      images: [
        {
          url: ogImageUrl,
          alt: t("MetaData:Web_Design_and_Development:description"),
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