import React from "react";

const Detail = ({ exerciseDetails }) => {
  return (
    <>
      <section>
        <img src={exerciseDetails.gifUrl} alt={exerciseDetails.name} />

        <p>{exerciseDetails.name}</p>
        <div>
          <p> {exerciseDetails.bodyPart}</p>
          <p>{exerciseDetails.equipment}</p>
          <p>{exerciseDetails.target}</p>
        </div>
      </section>
    </>
  );
};

export default Detail;
