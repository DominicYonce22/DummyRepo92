import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const valuesFromProvider = useContext(WorkoutsContext);
  if (!valuesFromProvider) {
    throw Error("useWorkoutsContext must be used inside a context provider");
  }
  return valuesFromProvider;
};
