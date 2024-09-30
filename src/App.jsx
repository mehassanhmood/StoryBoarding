import React from "react";
import HomePage from "./components/HomePage";
import Persona from "./components/Persona";
function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <HomePage></HomePage>
      <Persona />

    </div>
  );
}

export default App;

