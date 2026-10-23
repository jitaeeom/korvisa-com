export function trackContact(name: "contact_phone_click" | "contact_kakao_click" | "consult_start" | "generate_lead", method?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, { contact_method: method ?? "form" });
  }
}
