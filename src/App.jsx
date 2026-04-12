import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Domain from "./pages/Domain";
import Milestones from "./pages/Milestones";
import Documents from "./pages/Documents";
import Slides from "./pages/Slides";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/domain" element={<Domain />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/slides" element={<Slides />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;