import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Audience } from "../components/Audience";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { HrChecklist } from "../components/HrChecklist";
import { Resources } from "../components/Resources";
import { SuccessStories } from "../components/SuccessStories";
import { VisaGrid } from "../components/VisaGrid";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return (
    <>
      <Hero />
      <Audience />
      <VisaGrid />
      <HrChecklist />
      <SuccessStories />
      <Resources />
      <Contact />
    </>
  );
}
