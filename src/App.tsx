import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AnalyticsTracker } from "./components/AnalyticsTracker";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { RepresentativePage } from "./pages/RepresentativePage";
import { ConsultRequestPage } from "./pages/ConsultRequestPage";
import { VisaDetailPage } from "./pages/VisaDetailPage";
import { HousingPage } from "./pages/HousingPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";

export default function App() {
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      <AnalyticsTracker />
      {isAdminRoute ? null : <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visa/e-7" element={<Navigate to="/visa/e7" replace />} />
        <Route path="/visa/d-8" element={<Navigate to="/visa/d8" replace />} />
        <Route path="/visa/f-2" element={<Navigate to="/visa/f2" replace />} />
        <Route path="/visa/f-5" element={<Navigate to="/visa/f5" replace />} />
        <Route path="/visa/f-6" element={<Navigate to="/visa/f6" replace />} />
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
