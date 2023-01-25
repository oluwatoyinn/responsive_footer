import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Career from "./Pages/Career";
import ContactUs from "./Pages/ContactUs";
import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
