import { createContext, useReducer } from "react";

//this is the globally accessed thing
//so this is gonna the gateway for the state then
//this is synthesized ideology

//logic 1 = state is dynamic
//logic 2 the context thingy of the context provider is any data it can provide to the children
//combined logic = make the state the context, now the state is globally available

//this is just to keep the local state in sync with the database
//local meaning only the react app, not the backend

export const WorkoutsContext = createContext();
//concept 2 state
//concept 3 useReducer
//locally updating the state
export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};
export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  //now we need to have a way to access the payload from the database

  //concept 1 context provider

  return (
    //to consume the state and dispatch
    //we use the usecontext
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
