import Image from "next/image";
import TranslationsProvider from "@/app/components/TranslationsProvider";
import Navbar from "@/app/components/Navbar";
import initTranslations from "@/app/i18n";
import Footer from "@/app/components/Footer";
import ServiceTemplate from "@/app/components/ServiceTemplate";

const i18nNamespaces = ["Services"];

//@ts-ignore
export default async function Services({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "Services",
    "Home",
    "Navbar",
    "Footer",
  ]);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col mt-[5rem]">
        <div className="flex flex-col px-5 my-[10rem] md:ml-16">
          <h1 className="uppercase font-[400] my-10 text-[1.35rem] md:text-[1.5rem] lg:text-[48px]">
            {t("Navbar:services")}
          </h1>
          <p className="max-w-[800px] lg:text-[20px]">
            {t("Services:services_page_intro")}
          </p>
        </div>
        <ServiceTemplate
          bgColor={"#0A0A0A"}
          pageURL={"/services/web-design-and-development"}
          imgSrc={"/assets/services/webdev.webp"}
          imgAlt={"A person looking at a monitor that shows lines of code."}
          align={"left"}
          serviceTitle={t("Services:webdesign_and_dev")}
          serviceIntro={t("Services:webdev_page_long_intro")}
          textColor={"white"}
        ></ServiceTemplate>
        <ServiceTemplate
          bgColor={"white"}
          pageURL={"/services/online-marketing"}
          imgSrc={"/assets/services/online_marketing.webp"}
          imgAlt={
            "A Macbook showing various financial pie charts, and a tablet showing a calendar."
          }
          align={"right"}
          serviceTitle={t("Services:online_marketing")}
          serviceIntro={t("Services:online_marketing_page_long_intro")}
          textColor={"black"}
        ></ServiceTemplate>
        <ServiceTemplate
          bgColor={"#0A0A0A"}
          pageURL={"/services/graphic-design"}
          imgSrc={"/assets/services/graphics_design.webp"}
          imgAlt={
            "A female person working on graphics design on her Macbook and tablet."
          }
          align={"left"}
          serviceTitle={t("Services:graphic_design")}
          serviceIntro={t("Services:graphics_design_page_long_intro")}
          textColor={"white"}
        ></ServiceTemplate>
        <ServiceTemplate
          bgColor={"white"}
          pageURL={"/services/media"}
          imgSrc={"/assets/services/media.webp"}
          imgAlt={"A photo shooting of a food commerical."}
          align={"right"}
          serviceTitle={t("Services:media")}
          serviceIntro={t("Services:media_page_long_intro")}
          textColor={"black"}
        ></ServiceTemplate>
        <ServiceTemplate
          bgColor={"black"}
          pageURL={"/services/event-organization"}
          imgSrc={"/assets/services/event_organization.webp"}
          imgAlt={"A female person writing into a calendar."}
          align={"left"}
          serviceTitle={t("Services:event_organization")}
          serviceIntro={t("Services:event_organization_page_long_intro")}
          textColor={"white"}
        ></ServiceTemplate>
        {/* <ServiceTemplate
          bgColor={"#0A0A0A"}
          pageURL={"/services/eu-project-management"}
          imgSrc={"/assets/eu_service_bg.webp"}
          imgAlt={"Two person having a discussion in front of a whiteboard."}
          align={"left"}
          serviceTitle={t("Services:eu_title")}
          serviceIntro={t("Services:eu_page_long_intro")}
          textColor={"white"}
        ></ServiceTemplate> */}
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
    title: t("MetaData:Services:title"),
    description: t("MetaData:Services:description"),
    keywords: t("MetaData:Services:keywords"),
    canonical: websiteUrl, // Rel canonical URL
    openGraph: {
      url: websiteUrl,
      title: t("MetaData:Home:title"),
      description: t("MetaData:Services:description"),
      images: [
        {
          url: ogImageUrl,
          alt: t("MetaData:Services:description"),
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
