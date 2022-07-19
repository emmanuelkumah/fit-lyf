import React, { useState } from "react";
import { NavContext } from "../Context";
import NavBrand from "../Nav/NavBrand";
import Hero from "./Hero/Hero";

const Home = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <NavContext.Provider value={[isMenuClicked, setIsMenuClicked]}>
        <NavBrand />
        <Hero />
      </NavContext.Provider>
    </>
  );
};

export default Home;
