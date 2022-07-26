import React from "react";
import { CgGym } from "react-icons/cg";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Logo = () => {
  return (
    <Link to="/" className={classes["navLogo"]}>
      <h1>
        <CgGym className={classes["gym_icon-main"]} />
        Fit <span className={classes["logo_brand"]}>Lyf</span>
      </h1>
    </Link>
  );
};

export default Logo;
