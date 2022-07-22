import { Route, Routes } from "react-router-dom";
import "./App.css";
import ExerciseDetails from "./Components/Exercises/ExerciseDetails";
import Exercises from "./Components/Exercises/Exercises";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <div className="app_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises:id" element={<ExerciseDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
