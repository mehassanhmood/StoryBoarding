import React from "react";
import HomePage from "./components/HomePage";
import Persona from "./components/Persona";
import DollarWeakening from "./components/DollarWeakening";
import CostIncrease from "./components/CostIncrease";
import SuccessStrategies from "./components/SuccessStrategies";
import SPReturns from "./components/SPReturns";
import AdaptedPersona from "./components/AdaptedPersona";

function App() {
  return (
    
      <div className="py-6 px-2">
      <HomePage />
      {/* <div className="mt-4 w-full max-w-3xl"> */}
      <div>
        <Persona />
      </div>
      {/* <div className="mt-4 w-full max-w-3xl"> */}
      <div>
        <DollarWeakening />
      </div>
      {/* <div className="mt-4 w-full max-w-3xl"> */}
      <div>
        <CostIncrease />
      </div>
      {/* <div className="mt-4 w-full max-w-3xl"> */}
      <div>
        <SuccessStrategies />
      </div>
      {/* <div className="mt-4 w-full max-w-3xl"> */}
      <div>
        <SPReturns />
      </div>
      {/* <div className="mt-4 w-full max-w-3xl"> */}
      <div>
        <AdaptedPersona />
      </div>
    </div>
  );
}

export default App;
