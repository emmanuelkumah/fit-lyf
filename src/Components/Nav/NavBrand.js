import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import Nav from "./Nav";
import classes from "./Nav.module.css";

function NavBrand() {
  const [isMenuClicked, setisMenuClicked] = useState(false);

  const handleMenuClicked = () => {
    setisMenuClicked(true);
  };
  return (
    <>
      <div className={classes.navBrand} onClick={handleMenuClicked}>
        <AiOutlineMenuFold className={classes.openIcon} />
        <CgGym className={classes["gym_icon-main"]} />
        <h1>
          Fit <span className={classes["logo_brand"]}>Lyf</span>
        </h1>
      </div>
      <Nav isMenuClicked={isMenuClicked} setIsMenuClicked={setisMenuClicked} />
    </>
  );
}

export default NavBrand;
