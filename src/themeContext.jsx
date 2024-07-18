import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import workouts from "./components/workouts";

export const ThemeContext = React.createContext();

export default function ThemeContextProvider(props) {
  const [allExercises, setAllExercises] = useState(workouts);

  const [exerciseList, setExerciseList] = useState([]);

  const [exercise, setExercise] = useState({
    exerciseTarget: "",
    equipment: "",
  });

  const getExerciseList = () => {
    const options = {
      method: "GET",
      url: "https://exercisedb.p.rapidapi.com/exercises",
      headers: {
        "X-RapidAPI-Key": "69873ed5femsh8f6a8047126a130p105bf0jsn4d920e1cc80e",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((res) => setAllExercises(res.data))
      .catch((err) => console.log(err));
  };
  // useEffect(() => {
  //   getExerciseList();
  // }, []);

  const displayExercises = (showExercise) => {
    let arr = [...allExercises];

    const filteredArr = arr.filter((item) => {
      if (
        item.bodyPart === showExercise.exerciseTarget &&
        item.equipment === showExercise.equipment
      ) {
        return item;
      }
    });

    return (
      <div>
        {filteredArr.map((item, index) => (
          <form
            className="single-exercise"
            key={index}
            onSubmit={(e) => handleSubmit(e, item)}
          >
            <p>Exercise name: {item.name}</p>
            <p>Equipment: {item.equipment}</p>
            <p>Target: {item.target}</p>
            <button type="submit">Add to my Workout</button>
          </form>
        ))}
      </div>
    );
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setExercise((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  function handleSubmit(e, item) {
    e.preventDefault();
    setExerciseList((prev) => [...prev, item]);
  }

  return (
    <ThemeContext.Provider
      value={{
        exerciseList,
        getExerciseList,
        displayExercises,
        handleChange,
        handleSubmit,
        exercise,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
