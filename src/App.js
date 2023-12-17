import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/Contact/ContactUs";
import Navbar from "./Components/Navbar";
import loader from './images/loader3.gif';
import Category from "./Components/Category";
import Home from "./pages/Home/Home";
import UseLoading from "./Components/Loader/UseLoading";

function App() {
  const isLoading = UseLoading(3000);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loader-container">
          <img className="loader-Image" src={loader} alt="Loader" />
        </div>
      ) : (
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
      )}
      </div>
  );
}

export default App;
