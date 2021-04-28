import { createContext, useReducer, useState } from "react";
import traineesReducer from "../reducers/traineesReducer";
import axios from "axios";

const initialState = {
  loading: true,
  trainees: [],
  error: null,
};

export const TraineesContext = createContext();

const TraineesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(traineesReducer, initialState);
  // ALL TRAINEES
  async function getTrainees() {
    const res = await axios.get(
      "https://trainees-api.herokuapp.com/api/v1/trainees"
    );

    try {
      dispatch({
        type: "GET_ALL_TRAINEES",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TraineesContext.Provider value={{ getTrainees, trainees: state.trainees }}>
      {children}
    </TraineesContext.Provider>
  );
};
export default TraineesContextProvider;
