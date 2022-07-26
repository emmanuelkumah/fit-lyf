import React from "react";
import classes from "./Exercises.module.css";
import { CgGym } from "react-icons/cg";
import { FaRunning } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";

const Detail = ({ exerciseDetails }) => {
  return (
    <>
      <section className={classes["exerciseDetail-row"]}>
        <div className={classes["exerciseDetail-col"]}>
          <img
            src={exerciseDetails.gifUrl}
            alt={exerciseDetails.name}
            className={classes["exerciseDetails-img"]}
          />
        </div>

        <div className={classes["exerciseDetail-col"]}>
          <h4 className={classes["exerciseDetail-heading"]}>
            {exerciseDetails.name}
          </h4>
          <p className={classes["exerciseDetail-content"]}>
            {exerciseDetails.name} is one of the best exercises you can do to
            help you stay fit, strong and healthy.
          </p>
          <p className={classes["exerciseDetail-content"]}>
            It works on you {exerciseDetails.bodyPart} and equipment requirement
            for this exercise is your {exerciseDetails.equipment}
          </p>
          <section className={classes["exerciseDetail_highlights-sec"]}>
            <p>
              <FaRunning className={classes["exerciseDetail-icon"]} />
              <span className={classes["exercise_highlight_content"]}>
                {" "}
                {exerciseDetails.bodyPart}
              </span>
            </p>
            <p>
              <GiWeightLiftingUp className={classes["exerciseDetail-icon"]} />
              <span className={classes["exercise_highlight_content"]}>
                {" "}
                {exerciseDetails.target}
              </span>
            </p>
            <p>
              <CgGym className={classes["exerciseDetail-icon"]} />
              <span className={classes["exercise_highlight_content"]}>
                {exerciseDetails.equipment}
              </span>
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Detail;
