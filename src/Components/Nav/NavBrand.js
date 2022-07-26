import { useContext } from "react";
import { NavContext } from "../Context";
import { AiOutlineMenuFold } from "react-icons/ai";

import Nav from "./Nav";
import classes from "./Nav.module.css";
import Logo from "./Logo";

function NavBrand() {
  const [, setIsMenuClicked] = useContext(NavContext);

  const openNavMenu = () => {
    setIsMenuClicked(true);
  };
  return (
    <>
      <div className={classes.navBrand}>
        <AiOutlineMenuFold className={classes.openIcon} onClick={openNavMenu} />

        <Logo />
      </div>
      <Nav />
    </>
  );
}

export default NavBrand;
