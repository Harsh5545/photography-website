import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/Contact/ContactUs";
import Navbar from "./Components/Navbar";
import Category from "./Components/Category";

import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/category/wedding" element={<Category category="wedding" />} />
        <Route path="/category/lifestyle" element={<Category category="lifestyle" />} />
        <Route path="/category/portrait" element={<Category category="portrait" />} />
        <Route path="/category/realestate" element={<Category category="realestate" />} />
    
      </Routes>
        
    </Router>
  );
}

export default App;
