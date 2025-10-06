import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Join from "./pages/Join";
import FloatingButtons from "./components/FloatingButtons";
import VerifyPage from "./pages/Verification";
import SuccessPage from "./pages/Success";
import DismissibleBanner from "./components/DismissibleBanner";

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);

  const handleBannerDismiss = () => {
    setBannerVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DismissibleBanner onDismiss={handleBannerDismiss} />
      <Header bannerVisible={bannerVisible} />
      <main className={`flex-grow transition-all duration-300 ${bannerVisible ? 'pt-28' : 'pt-20'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

export default App;
