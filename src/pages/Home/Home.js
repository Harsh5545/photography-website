import React from "react";
import Hero from "../Hero/Home";
import Navbar from "../../Components/Navbar";
import HomeMiddle from "../../Components/Home-middle/HomeMiddle";
import HomeService from "../../Components/Home-middle/HomeService/HomeService";
import HomePortfolio from "../../Components/Home-middle/HomePortfolio/HomePortfolio";
import HomeReview from "../../Components/Home-middle/HomeReview/HomeReview";
import HomeCustomer from "../../Components/Home-middle/HomeCustomer/HomeCustomer";
import HomePhotographer from "../../Components/Home-middle/HomePhotographer/HomePhotographer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeMiddle />
      <HomeService />
      <HomePortfolio />
      <HomeReview />
      <HomeCustomer />
      <HomePhotographer/>
    </div>
  );
}

export default Home;
