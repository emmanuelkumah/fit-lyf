import React, { useContext } from "react";
import { NavContext } from "../Context";

import classes from "./Nav.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { CgGym } from "react-icons/cg";

function Nav() {
  const [isMenuClicked, setIsMenuClicked] = useContext(NavContext);

  const closeSideNav = () => {
    setIsMenuClicked(false);
  };
  return (
    <>
      <nav
        className={`${classes.sideNav} ${
          isMenuClicked && classes.sideNavOpen
        } `}
      >
        <AiOutlineCloseSquare
          onClick={closeSideNav}
          className={classes["close_icon"]}
        />
        <div className={classes.innerNavBrand}>
          <CgGym
            className={classes["gym_icon_sideNav"]}
            onClick={closeSideNav}
          />
          <h1>
            Fit <span className={classes["logo_brand"]}>Lyf</span>
          </h1>
        </div>

        <ul classsName={classes["nav_menus"]}>
          <li>Home</li>
          <li>Services</li>
          <li>Subscribe</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
