import React from "react";
import { BsFacebook, BsInstagram, BsSnapchat, BsTwitter } from "react-icons/bs";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={classes["footer_container"]}>
        <div className={classes["footer_subscription_row"]}>
          <div className={classes["footer_col"]}>
            <h4>Subscribe and get notified when we add new exercises</h4>
          </div>
          <div className={classes["footer_col"]}>
            <input
              type="text"
              placeholder="Enter your email address"
              autoFocus
            />
            <button>Subscribe</button>
          </div>
        </div>
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
      </section>
    </>
  );
};

export default Footer;
