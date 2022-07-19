import classes from "./Nav.module.css";
import { AiOutlineCloseSquare, AiOutlineMenu } from "react-icons/ai";
import { CgGym } from "react-icons/cg";

// import classes from "./Nav.module.css";

function Nav({ isMenuClicked, setIsMenuClicked }) {
  const closeSideNav = () => {
    setIsMenuClicked(false);
  };
  return (
    <>
      <nav
        className={`${classes.sideNav} ${isMenuClicked && classes.sideNavOpen}`}
      >
        <AiOutlineCloseSquare
          onClick={closeSideNav}
          className={classes["close_icon"]}
        />
        <div className={classes.innerNavBrand}>
          <CgGym className={classes["gym_icon_sideNav"]} />
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
