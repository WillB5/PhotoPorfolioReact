import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/home.jsx";
import Navbar from "./components/navbar.jsx";
import Portfolio from "./pages/portfolio.jsx";
import ContactInfo from "./components/contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-vh-100 bg-dark text-white d-flex flex-column">
        <div className="container text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
        <ContactInfo />
      </div>
    </>
  );
}

export default App;
