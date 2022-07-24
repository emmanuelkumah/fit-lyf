import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData, exerciseOptions } from "../../utils/fetchData";
import Detail from "./Detail";
import ExerciseVideo from "./ExerciseVideo";
import RelatedExercises from "./RelatedExercises";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [targetMuscles, setTargetMuscles] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const { id } = useParams();

  //fetchData
  const fetchExercisesData = async () => {
    const exerciseDB = "https://exercisedb.p.rapidapi.com";

    const exerciseDetailsData = await fetchData(
      `${exerciseDB}/exercises/exercise/${id}`,
      exerciseOptions
    );
    console.log("details", exerciseDetailsData);
    setExerciseDetails(exerciseDetailsData);

    const targetMusclesData = await fetchData(
      `${exerciseDB}/exercises/target/${exerciseDetailsData.target}`,
      exerciseOptions
    );
    setTargetMuscles(targetMusclesData);

    const equipmentData = await fetchData(
      `${exerciseDB}/exercises/equipment/${exerciseDetailsData.equipment}`,
      exerciseOptions
    );
    setEquipments(equipmentData);
  };

  useEffect(() => {
    fetchExercisesData();
  }, [id]);

  return (
    <>
      <Detail exerciseDetails={exerciseDetails} />
      <RelatedExercises />
      <ExerciseVideo />
    </>
  );
};

export default ExerciseDetails;
