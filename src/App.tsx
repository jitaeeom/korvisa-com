import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { RepresentativePage } from "./pages/RepresentativePage";
import { ConsultRequestPage } from "./pages/ConsultRequestPage";
import { VisaDetailPage } from "./pages/VisaDetailPage";
import { HousingPage } from "./pages/HousingPage";
import { VisaE71Page } from "./pages/VisaE71Page";
import { VisaE74Page } from "./pages/VisaE74Page";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { SeoManager } from "./seo/SeoManager";

export default function App() {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      <SeoManager />
      <AnalyticsTracker />
      {isAdminRoute ? null : <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visa/e-7" element={<Navigate to="/visa/e7" replace />} />
        <Route path="/visa/e-7-1" element={<Navigate to="/visa/e7-1" replace />} />
        <Route path="/visa/e-7-4" element={<Navigate to="/visa/e7-4" replace />} />
        <Route path="/visa/d-8" element={<Navigate to="/visa/d8" replace />} />
        <Route path="/visa/f-2" element={<Navigate to="/visa/f2" replace />} />
        <Route path="/visa/f-5" element={<Navigate to="/visa/f5" replace />} />
        <Route path="/visa/f-6" element={<Navigate to="/visa/f6" replace />} />
        <Route path="/visa/e7-1" element={<VisaE71Page />} />
        <Route path="/visa/e7-4" element={<VisaE74Page />} />
        <Route path="/visa/:slug" element={<VisaDetailPage />} />
        <Route path="/housing" element={<HousingPage />} />
        <Route path="/representative" element={<RepresentativePage />} />
        <Route path="/consult" element={<ConsultRequestPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminDashboardPage />} />
      </Routes>
      {isAdminRoute ? null : <Footer />}
    </>
  );
}
