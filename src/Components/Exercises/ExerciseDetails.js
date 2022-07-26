import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchData,
  exerciseOptions,
  youtubeVideosOptions,
} from "../../utils/fetchData";
import Detail from "./Detail";
import ExerciseVideo from "./ExerciseVideo";
import Footer from "../Home/Footer/Footer";
import NavBrand from "../Nav/NavBrand";
import Logo from "../Nav/Logo";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscles, setTargetMuscles] = useState([]);
  const [equipments, setEquipments] = useState([]);
  const { id } = useParams();

  //fetchData
  const fetchExercisesData = async () => {
    const exerciseDB = "https://exercisedb.p.rapidapi.com";
    const youtubeVideoUrl =
      "https://youtube-search-and-download.p.rapidapi.com";

    const exerciseDetailsData = await fetchData(
      `${exerciseDB}/exercises/exercise/${id}`,
      exerciseOptions
    );
    setExerciseDetails(exerciseDetailsData);

    // const targetMusclesData = await fetchData(
    //   `${exerciseDB}/exercises/target/${exerciseDetailsData.target}`,
    //   exerciseOptions
    // );
    // setTargetMuscles(targetMusclesData);

    // const equipmentData = await fetchData(
    //   `${exerciseDB}/exercises/equipment/${exerciseDetailsData.equipment}`,
    //   exerciseOptions
    // );
    // setEquipments(equipmentData);

    //fetch youtube videos
    const exerciseVideosData = await fetchData(
      `${youtubeVideoUrl}/search?query=${exerciseDetailsData.name} exercise`,
      youtubeVideosOptions
    );
    console.log("videos", exerciseVideosData.contents);
    setExerciseVideos(exerciseVideosData.contents);
  };

  useEffect(() => {
    fetchExercisesData();
  }, [id]);

  return (
    <>
      <Logo />
      <Detail exerciseDetails={exerciseDetails} />
      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetails.name}
      />

      <Footer />
    </>
  );
};

export default ExerciseDetails;
