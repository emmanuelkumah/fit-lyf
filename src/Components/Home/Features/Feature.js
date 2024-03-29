import React from "react";
import { FaDumbbell, FaRunning } from "react-icons/fa";
import { GiJumpingRope, GiWeightLiftingUp } from "react-icons/gi";
import classes from "./Feature.module.css";
import featureImg from "../../../assets/gymImg2.png";

const Feature = () => {
  return (
    <>
      <section className={classes["exercise_sec"]} id="features">
        <h3>Popular Exercises</h3>
        <div className={classes["exercises_container"]}>
          <div className={classes["exercise_content"]}>
            <FaRunning className={classes["exercise_icon"]} />
            <div className={classes["exercise_details"]}>
              <p>Running</p>
              <p>Run to make you fit</p>
            </div>
          </div>
          <div className={classes["exercise_content"]}>
            <GiWeightLiftingUp className={classes["exercise_icon"]} />
            <div className={classes["exercise_details"]}>
              <p>Lifting</p>
              <p>Lift for strong muscles</p>
            </div>
          </div>
          <div className={classes["exercise_content"]}>
            <FaDumbbell className={classes["exercise_icon"]} />
            <div className={classes["exercise_details"]}>
              <p>Cardios</p>
              <p>Dumbells to help you heart</p>
            </div>
          </div>
          <div className={classes["exercise_content"]}>
            <GiJumpingRope className={classes["exercise_icon"]} />
            <div className={classes["exercise_details"]}>
              <p>Skipping</p>
              <p>Skipping makes you healthy</p>
            </div>
          </div>
        </div>
      </section>
      <div className={classes["features_container"]}>
        <section className={classes["features_row"]}>
          <div className={classes["feature_col"]}>
            <div className={classes["feature_blob"]}></div>
            <p className={classes["feature_pro"]}>Exercise with experts </p>
            <img
              src={featureImg}
              alt="featureImg"
              className={classes["feature_img"]}
            />
          </div>
          <div className={classes["feature_col"]}>
            <section className={classes["feature_col_content"]}>
              <h3 className={classes["feature_caption"]}>
                More than 1000 exercises to choose from. Ready to be{" "}
                <span>fit </span>?
              </h3>
              <div className={classes["feature_insp"]}>
                <div>
                  <h4>Get Inspired</h4>
                  <p className={classes["feature_insp-content"]}>
                    Workhard, push yourself because no one else is going to do
                    it for you
                  </p>
                </div>
                <div>
                  <h4>Get Results</h4>
                  <p className={classes["feature_insp-content"]}>
                    Believe you can and you're halfway there,keeping push and
                    see results
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Feature;
