import React from "react";
import HomePage from "./components/HomePage";
import Persona from "./components/Persona";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-teal-300 p-4">
      <HomePage />
      <Persona />
    </div>
  );
}

export default App;
