import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!MEASUREMENT_ID) return;

    const existing = document.getElementById("ga4-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "ga4-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer ?? [];
    const gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
    window.gtag = window.gtag ?? gtag;

    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, {
      send_page_view: false,
      anonymize_ip: true,
    });
  }, []);

  useEffect(() => {
    if (!MEASUREMENT_ID || typeof window.gtag !== "function") return;
    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
    });
  }, [location]);

  return null;
}
