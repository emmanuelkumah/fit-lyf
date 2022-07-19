import { useContext } from "react";
import { NavContext } from "../Context";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import Nav from "./Nav";
import classes from "./Nav.module.css";

function NavBrand() {
  const [, setIsMenuClicked] = useContext(NavContext);

  const openNavMenu = () => {
    setIsMenuClicked(true);
  };
  return (
    <>
      <div className={classes.navBrand}>
        <AiOutlineMenuFold className={classes.openIcon} onClick={openNavMenu} />
        <CgGym className={classes["gym_icon-main"]} />
        <h1>
          Fit <span className={classes["logo_brand"]}>Lyf</span>
        </h1>
      </div>
      <Nav />
    </>
  );
}

export default NavBrand;
