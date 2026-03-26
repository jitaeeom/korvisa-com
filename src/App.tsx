import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { RepresentativePage } from "./pages/RepresentativePage";
import { ConsultRequestPage } from "./pages/ConsultRequestPage";
import { VisaDetailPage } from "./pages/VisaDetailPage";
import { HousingPage } from "./pages/HousingPage";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visa/:slug" element={<VisaDetailPage />} />
        <Route path="/housing" element={<HousingPage />} />
        <Route path="/representative" element={<RepresentativePage />} />
        <Route path="/consult" element={<ConsultRequestPage />} />
      </Routes>
      <Footer />
    </>
  );
}
