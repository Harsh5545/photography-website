import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/Contact/ContactUs";
import Navbar from "./Components/Navbar";

import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
