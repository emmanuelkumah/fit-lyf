import React, { useContext } from "react";
import { NavContext } from "../Context";
import { HashLink as Link } from "react-router-hash-link";
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
          <Link to="#home" smooth className={classes["navLinks"]}>
            <li>Home</li>
          </Link>
          <Link to="#features" smooth className={classes["navLinks"]}>
            <li>Features</li>
          </Link>
          <Link to="#testimonials" smooth className={classes["navLinks"]}>
            {" "}
            <li>Testimonials</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
