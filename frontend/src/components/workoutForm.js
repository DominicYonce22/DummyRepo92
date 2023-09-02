import { useState } from "react";
import { useWorkoutsContext } from "../Hooks/useWorkoutsContext";

//states and variables
const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  //logic  //this whole logic just posts the things to the database
  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //why turn it into json again, when it has been stringified
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout added", json);

      //

      //adding the dispatch in here makes the database in sync with the front end

      //read 'if (response.ok)' if there is actually a data added to the database
      //this dispatch lines translates to
      //get that same data that was added and use it as a payload to
      //this is dispatch with this specific action called 'create workout'

      //now this logic takes this payload and adds it to the current state which is named the workout
      //this state is imported as a context together with the dispatch in the home
      //so then everytime there is a new payload being added to the state
      //it is also displayed in the home file via the state

      //but note that this is not retrieving things from the database this is just using
      //the data being passed in the database everytime the submit handler gets trggered
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };
  //end of the logic

  //form template
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Excersize Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />
      <label>Excersize Load (kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

//explanation of why the new object dont display the added workout
export default WorkoutForm;
