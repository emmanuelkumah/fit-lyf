import React, { useContext } from "react";
import { NavContext } from "../../Context";

import classes from "./Hero.module.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BiDumbbell } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import heroImg from "../../../assets/heroImg.png";
import heroImgpattern from "../../../assets/heroImgBack.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isMenuClicked] = useContext(NavContext);

  return (
    <>
      <div
        className={`${classes["hero_container"]} ${
          isMenuClicked && classes["hero_shift"]
        }`}
        id="home"
      >
        <section className={classes["hero_col"]}>
          <div className={classes["hero_content"]}>
            <h2>
              Workout <span>exercises</span> made to suit your{" "}
              <span>life style</span>
            </h2>

            <p>
              Integrate these exercise in your daily activities to boost your
              productivity
            </p>
            <p>It's time to get into the best shape of your life</p>
          </div>
          <Link className={classes["btn-container"]} to="/exercises">
            <button>Get Started</button>
            <span>
              <BsFillPlayFill />
            </span>
          </Link>
        </section>
        <section className={classes["hero_col"]}>
          <div className={classes["stats_container"]}>
            <p>
              <span>45 </span>expert trainers
            </p>
            <p>
              <span>240K</span> exercises
            </p>
            <p>
              <span>2.5mil+ </span>monthly views
            </p>
          </div>
          <div className={classes["hero_container"]}>
            <img src={heroImg} alt="hero" />
            <img
              src={heroImgpattern}
              alt="heroB"
              className={classes["heroPattern"]}
            />
            <div className={classes["heartRate"]}>
              <p>
                <AiFillHeart className={classes["heartRate_icon"]} />
                Heart Rate <span>323</span>bpm
              </p>
            </div>
            <div className={classes["dumbBells"]}>
              <p>
                <BiDumbbell className={classes["dumbBells_icon"]} />
                <span> Build muscles</span>
              </p>
            </div>
          </div>

          <div className={classes["blob_img"]}></div>
        </section>
      </div>
    </>
  );
};

export default Hero;
