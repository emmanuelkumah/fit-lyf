import React from "react";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import classes from "./Footer.module.css";

const FooterSocials = () => {
  return (
    <div>
      <hr />
      <footer>
        <p>All rights reserved</p>
        <div className={classes["footer_icons"]}>
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsSnapchat />
        </div>
      </footer>
    </div>
  );
};

export default FooterSocials;
