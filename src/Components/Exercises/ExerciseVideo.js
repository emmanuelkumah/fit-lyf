import React from "react";
import classes from "./Exercises.module.css";

const ExerciseVideo = ({ exerciseVideos, name }) => {
  const exerciseVideosSlice = exerciseVideos.slice(0, 6);
  const relatedExerciseVideos = exerciseVideosSlice.map(
    (exerciseVid, index) => {
      const { title, thumbnails } = exerciseVid.video;
      return (
        <a
          key={index}
          href={`https://www.youtube.com/watch?v=${exerciseVid.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={thumbnails[0].url}
            alt={title}
            className={classes["exercise_vid_img"]}
          />
          <p className={classes["exercise_vid_title"]}>{`${title.slice(
            0,
            30
          )}...`}</p>
        </a>
      );
    }
  );

  return (
    <>
      <div>
        <h3 className={classes["exercise_video_caption"]}>
          Watch <span>{name}</span> Exericise Videos
        </h3>
      </div>
      <section className={classes["exercise_videos"]}>
        {relatedExerciseVideos}
      </section>
    </>
  );
};

export default ExerciseVideo;
