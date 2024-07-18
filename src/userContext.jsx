import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const UserContext = React.createContext();

export default function UserContextProvider(props) {
  const [userExercise, setExercises] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userExercise,
        setExercises,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
