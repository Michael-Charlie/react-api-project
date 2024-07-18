import React, { useContext } from "react";
import { ThemeContext } from "../themeContext";

export default function Main(props) {
  const { exerciseList } = useContext(ThemeContext);

  const showExercise = exerciseList.map((workout, i) => {
    return (
      <div className="main--exercise-list" key={i}>
        <h3>Exercise name: {workout.name}</h3>
        <p>Equipment: {workout.equipment}</p>
        <p>Body Part: {workout.bodyPart}</p>
        <p>Target: {workout.target}</p>
        <img src={workout.gifUrl} />
      </div>
    );
  });

  return (
    <div>
      <div className="main--routines"></div>
      {showExercise}
    </div>
  );
}
