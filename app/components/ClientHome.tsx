"use client"
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import HomeServicesSection from "./HomeServicesSection";
import AboutSection from "./AboutSection";
import OurWorkSection from "./OurWorkSection";
import ContactForm from "./ContactForm";
import LoadingScreen from "./LoadingScreen";

export default function ClientHome() {

  return (
    <main className="flex flex-col">
      <HeroSection />
      <HomeServicesSection />
      <AboutSection />
      <OurWorkSection />
      <ContactForm />
    </main>
  );
}
