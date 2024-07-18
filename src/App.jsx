import { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/Home";
import { ThemeContext } from "./themeContext";
import "./App.css";

function App(props) {
  const {
    exerciseList,
    getExerciseList,
    exerciseData,
    displayExercises,
    handleChange,
    handleSubmit,
    filteredArr,
  } = useContext(ThemeContext);

  return (
    <div>
      <Link to="/Home" style={{ padding: 5 }}>
        Home
      </Link>
      <Link to="/Header" style={{ padding: 5 }}>
        Create a work out
      </Link>
      <Link to="/Main" style={{ padding: 5 }}>
        View your workout
      </Link>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route
          path="/Header"
          element={
            <Header
              displayExercises={displayExercises}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              filteredArr={filteredArr}
            />
          }
        />
        <Route
          path="/Main"
          element={
            <Main exerciseData={exerciseData} exerciseList={exerciseList} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
