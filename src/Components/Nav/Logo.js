import React from "react";
import { CgGym } from "react-icons/cg";
import classes from "./Nav.module.css";

const Logo = () => {
  return (
    <div>
      <h1>
        <CgGym className={classes["gym_icon-main"]} />
        Fit <span className={classes["logo_brand"]}>Lyf</span>
      </h1>
    </div>
  );
};

export default Logo;
