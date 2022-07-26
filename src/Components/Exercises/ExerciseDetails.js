import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchData,
  exerciseOptions,
  youtubeVideosOptions,
} from "../../utils/fetchData";
import Detail from "./Detail";
import ExerciseVideo from "./ExerciseVideo";
import Logo from "../Nav/Logo";
import FooterSocials from "../Home/Footer/FooterSocials";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

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

    //fetch youtube videos
    const exerciseVideosData = await fetchData(
      `${youtubeVideoUrl}/search?query=${exerciseDetailsData.name} exercise`,
      youtubeVideosOptions
    );
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

      <FooterSocials />
    </>
  );
};

export default ExerciseDetails;
