import React, { useState } from "react";
import { fetchData, exerciseOptions } from "../../utils/fetchData";

const SearchExercise = ({ setExercises }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleFormSumbit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      //fetch data from api

      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      //filter exercises
      const filteredExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.bodyPart.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm)
      );
      setExercises(filteredExercises);
      setSearchTerm("");
    }
  };
  return (
    <>
      <section>
        <h1>Awesome exercise you should do </h1>
        <form onSubmit={(e) => handleFormSumbit(e)}>
          <input
            type="text"
            placeholder="Enter the exercise to search for "
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
          />
          <button>Search</button>
        </form>
      </section>
    </>
  );
};

export default SearchExercise;
