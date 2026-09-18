import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageMeta } from "./pageMeta";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = attr === "name" ? `meta[name="${key}"]` : `meta[property="${key}"]`;
  const extras = document.head.querySelectorAll(selector);
  let el = extras.item(0) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  for (let i = 1; i < extras.length; i += 1) {
    extras[i].parentNode?.removeChild(extras[i]);
  }
}

function upsertCanonical(href: string) {
  const extras = document.head.querySelectorAll('link[rel="canonical"]');
  let el = extras.item(0) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  for (let i = 1; i < extras.length; i += 1) {
    extras[i].parentNode?.removeChild(extras[i]);
  }
}

export function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("name", "robots", meta.robots);
    upsertCanonical(meta.canonical);
    upsertMeta("property", "og:title", meta.ogTitle);
    upsertMeta("property", "og:description", meta.ogDescription);
    upsertMeta("property", "og:url", meta.ogUrl);
    upsertMeta("property", "og:type", meta.ogType);
    upsertMeta("property", "og:site_name", meta.ogSiteName);
  }, [pathname]);

  return null;
}
