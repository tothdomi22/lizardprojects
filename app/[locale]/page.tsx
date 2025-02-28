import "../styles/globals.scss";
import initTranslations from "../i18n";
import { Suspense } from "react";
import Head from "next/head";
import TranslationsProvider from "../components/TranslationsProvider";
import LoadingScreen from "../components/LoadingScreen";
import ClientHome from "../components/ClientHome";

// const ogImageUrl = "https://www.lizardprojects.com/assets/og_image.jpg";
// const twitterCardImageUrl = "https://www.lizardprojects.com/assets/twitter_card_image.jpg";
// const summaryCardImageUrl = "https://www.lizardprojects.com/assets/summary_card.jpg";

const ogImageUrl = "/assets/og_image.jpg";
const twitterCardImageUrl = "/assets/twitter_card_image.jpg";
const summaryCardImageUrl = "/assets/summary_card.jpg";

const i18nNamespaces = ["home, MetaData, JsonLD"];



//@ts-ignore
export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "Home",
    "ContactForm",
    "Navbar",
    "Services",
    "Footer",
    "MetaData",
    "JsonLD",
  ]);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Head>
        <title>{t("MetaData:Home.title")}</title>
        <meta name="description" content={t("MetaData:Home:description")} />
        <meta name="keywords" content={t("MetaDataHome:keywords")} />
        <meta property="og:title" content={t("MetaData:Home:title")} />
        <meta
          property="og:description"
          content={t("MetaData:Home:description")}
        />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:url" content="https://www.lizardprojects.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("MetaData:Home:title")} />
        <meta
          name="twitter:description"
          content={t("MetaData:Home:description")}
        />
        <meta name="twitter:image" content={twitterCardImageUrl} />
      </Head>
      <main className="flex flex-col">
        <Suspense fallback={<LoadingScreen />}>
          <ClientHome />
        </Suspense>
      </main>
    </TranslationsProvider>
  );
}


    // DEV TESTING
    // const ogImageUrl = "/assets/og_image.jpg";
    // const summaryCardImageUrl = "/assets/summary_card.jpg";
    // const logoUrl = "/assets/logo_green.png";



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
    title: t("MetaData:Home:title"),
    description: t("MetaData:Home:description"),
    keywords: t("MetaData:Home:keywords"),
    canonical: websiteUrl, // Rel canonical URL
    openGraph: {
      url: websiteUrl,
      title: t("MetaData:Home:title"),
      description: t("MetaData:Home:description"),
      images: [
        {
          url: ogImageUrl,
          alt: t("MetaData:Home:description"),
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
