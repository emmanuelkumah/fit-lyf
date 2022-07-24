import React, { useState, useEffect } from "react";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import classes from "./Exercises.module.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const ExercisesBodyParts = ({ setSelectBodyPart }) => {
  const [bodyParts, setBodyParts] = useState([]);

  const getBodyPart = (item) => {
    setSelectBodyPart(item);
  };
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

  const bodyPartList = bodyParts.map((part, index) => (
    <li
      key={index}
      onClick={() => getBodyPart(part)}
      className={classes["bodyPart-item"]}
    >
      {part}
    </li>
  ));
  return (
    <>
      <section className={classes["bodyParts_container"]}>
        <h2>Body Parts</h2>

        <ScrollMenu>
          <ul className={classes["bodyParts"]}>{bodyPartList}</ul>
        </ScrollMenu>
      </section>
    </>
  );
};

export default ExercisesBodyParts;
