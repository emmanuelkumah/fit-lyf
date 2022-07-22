import React, { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import classes from "./Exercises.module.css";

const ExercisesBodyParts = () => {
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchBodyParts();
  }, []);
  console.log(bodyParts);
  const bodyPartList = bodyParts.map((part, index) => (
    <li key={index}>{part}</li>
  ));
  return (
    <>
      <section className={classes["bodyParts_container"]}>
        <h2>Body PArts</h2>
        <div className={classes["bodyParts_list"]}>
          <ul>{bodyPartList}</ul>
        </div>
      </section>
    </>
  );
};

export default ExercisesBodyParts;
