import React, { useState } from "react";
import classes from "./Exercises.module.css";
import ExercisesBodyParts from "./ExercisesBodyParts";
import SearchExercise from "./SearchExercise";
import SingleExercise from "./SingleExercise";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  console.log(exercises);
  const exerciseLists = exercises.map((exercise) => (
    <SingleExercise key={exercise.id} exercise={exercise} />
  ));
  return (
    <>
      <SearchExercise setExercises={setExercises} />
      <ExercisesBodyParts />
      <section>
        <h2>Exercises</h2>
        <div className={classes["exercises_lists_container"]}>
          {exerciseLists}
        </div>
      </section>
    </>
  );
};

export default Exercises;
