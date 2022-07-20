import React, { useState } from "react";
import { NavContext } from "../Context";
import NavBrand from "../Nav/NavBrand";
import Feature from "./Features/Feature";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <NavContext.Provider value={[isMenuClicked, setIsMenuClicked]}>
        <NavBrand />
        <Hero />
        <Feature />
        <Testimonials />
        <Footer />
      </NavContext.Provider>
    </>
  );
};

export default Home;
