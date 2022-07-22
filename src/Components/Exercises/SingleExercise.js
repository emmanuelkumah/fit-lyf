import React from "react";
import classes from "./Exercises.module.css";
import { Link } from "react-router-dom";

const SingleExercise = ({ exercise }) => {
  return (
    <div className={classes["single-exercise-card"]}>
      <Link
        to={`/exercises/${exercise.id}`}
        className={classes["exercise-link"]}
      >
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <p className={classes["single-exercise-name"]}>{exercise.name}</p>
      </Link>
    </div>
  );
};

export default SingleExercise;
