// layout.tsx
import "../styles/globals.scss";
import { Inter } from "next/font/google";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TranslationsProvider from "../components/TranslationsProvider";
import initTranslations from "../i18n";
import LoadingScreen from "../components/LoadingScreen";
import NextTopLoader from "nextjs-toploader";
import CookieConsent from "../components/CookieConsentComponent";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Cookies, getCookieConsentValue } from "react-cookie-consent";
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ["latin"] });
const i18nNamespaces = ["home"];

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}



//@ts-ignore
export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, [
    "Home",
    "ContactForm",
    "Navbar",
    "Services",
    "Footer",
    "WebDev_page",
    "CookieConsent"
  ]);

  const cookieStore = cookies()
  const accepted = cookieStore.get('CookieConsent')

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <html lang={locale} dir={dir(locale)}>
        <body className={inter.className}>
          <CookieConsent />
          <Navbar />
          <NextTopLoader
            showSpinner={false}
            color="#00FF9C"
            height={5}
            initialPosition={0.1}
            crawlSpeed={200}
            easing="ease"
            speed={200}
          />

          {children}
          <Footer />
        </body>
     
        {accepted?.value === "true" && <GoogleAnalytics gaId={process.env.GTAG_CODE as string} />}
      </html>
    </TranslationsProvider>
  );
}
