import React, { useState, useEffect } from "react";
import classes from "./Exercises.module.css";
import ExercisesBodyParts from "./ExercisesBodyParts";
import SearchExercise from "./SearchExercise";
import SingleExercise from "./SingleExercise";
import Pagination from "@mui/material/Pagination";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import Logo from "../Nav/Logo";
import { Oval } from "react-loader-spinner";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectBodyPart, setSelectBodyPart] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const exercisePerPage = 9;

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];

      if (selectBodyPart === "all" || selectBodyPart === "") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectBodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
      //stop loading
      setIsLoading(false);
    };

    fetchExercisesData();
  }, [selectBodyPart]);

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentExercise = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  //paginate
  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  //iterate and display current exercise
  const currentExercisesLists = currentExercise.map((exercise) => (
    <SingleExercise key={exercise.id} exercise={exercise} />
  ));

  return (
    <>
      <Logo />
      <SearchExercise setExercises={setExercises} />
      <ExercisesBodyParts setSelectBodyPart={setSelectBodyPart} />
      <section>
        <div className={classes["exercises_lists_container"]}>
          {isLoading ? <Oval color="#cc2936" /> : currentExercisesLists}
          {/* {currentExercisesLists} */}
          {exercises.length > 9 && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisePerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
              variant="outlined"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Exercises;
