import React from "react";
import { useState, useContext } from "react";
import { ThemeContext } from "../themeContext";
import Main from "./Main";
import workouts from "./workouts";

export default function Header(props) {
  const {
    getExerciseList,
    exerciseData,
    displayExercises,
    handleChange,
    handleSubmit,
    filteredArr,
    exercise,
  } = useContext(ThemeContext);

  function addWorkout(e) {
    e.preventDefault()
    displayExercises(exercise)
  }

  return (
    <div>
      <div>
        <h2>
          Click the drop down to filter targeted muscles and type of equipment
          you'd like to use. When you finish, you can view the work out by
          itself by clicking 'view your work out.'
        </h2>
      </div>
      <div className="header">
        <form className="header--routine" onSubmit={addWorkout}>
          <h1>Add new routine</h1>

          <select
            name="exerciseTarget"
            value={exercise.exerciseTarget}
            onChange={handleChange}
          >
            <option name="exerciseTarget" value={""}>
              Targeted Muscle
            </option>

            <option name="exerciseTarget" value={"chest"}>
              Chest
            </option>

            <option name="exerciseTarget" value={"back"}>
              Back
            </option>
          </select>

          <select
            name="equipment"
            value={exercise.equipment}
            onChange={handleChange}
          >
            <option name="equipment" value={""}>
              Equipment
            </option>

            <option name="equipment" value={"body weight"}>
              Body Weight
            </option>

            <option name="equipment" value={"dumbbell"}>
              dumbbell
            </option>
          </select>
        </form>
        <div className="header--scroll-exercises">
          {exercise && displayExercises(exercise)}
        </div>
      </div>
    </div>
  );
}

// const {
//   getExerciseList,
//   exerciseData,
//   displayExercises,
//   handleChange,
//   handleSubmit,
//   filteredArr,
// } = props;
// const [exerciseList, setExerciseList] = useState([]);

// const [addExercise, setAddExercise] = useState();

// const [exercise, setExercise] = useState({
//   exerciseTarget: "",
//   equipment: "",
// });

// const displayExercises = (showExercise) => {
//   let arr = [...exercises];
//   // filter exercises based on type
//   const filteredArr = arr.filter((item) => {
//     if (
//       item.bodyPart === showExercise.exerciseTarget &&
//       item.equipment === showExercise.equipment
//     ) {
//       return item;
//     }
//   });
//   //I changed the div to a form to add my handle submit here.
//   return (
//     <div>
//       {filteredArr.map((item, index) => (
//         <form
//           className="single-exercise"
//           key={index}
//           onSubmit={(e) => handleSubmit(e, item)}
//         >
//           <p>Exercise name: {item.name}</p>
//           <p>Equipment: {item.equipment}</p>
//           <p>Target: {item.target}</p>
//           <button type="submit">Add to my Workout</button>
//         </form>
//       ))}
//     </div>
//   );
// };

// function handleChange(e) {
//   const { name, value } = e.target;
//   setExercise((prevInput) => ({
//     ...prevInput,
//     [name]: value,
//   }));
// }
// // Trying to follow what I did for ugly things - I want the exercise that's added/stored to be printed into the list. ***Note, Jordan wrote the 'submit should filter the array' - I need to try to work on this
// function handleSubmit(e, item) {
//   e.preventDefault();
//   setExerciseList((prev) => [...prev, item]);
// }
