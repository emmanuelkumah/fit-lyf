import React from "react";
import classes from "./Footer.module.css";
import FooterSocials from "./FooterSocials";

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
        <FooterSocials />
      </section>
    </>
  );
};

export default Footer;
