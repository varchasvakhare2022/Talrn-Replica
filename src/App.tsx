import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Join from "./pages/Join";
import FloatingButtons from "./components/FloatingButtons";
import VerifyPage from "./pages/Verification";
import SuccessPage from "./pages/Success";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
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
