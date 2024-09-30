// SPReturns.js
import React from 'react';
import SPY from "../../public/SPY.png";

const SPReturns = () => {


  return (
    <div className="p-4 border rounded-lg shadow-md">
      
      <div className="mb-4">
        <p> <b> Beating the odds:</b></p> <br />
        <p>
        As Shakira sat at the table, her mind drifted to an article from <b>Morningstar: "The Rise of Passive Investing"</b> she had recently read. It wasn’t just experts and wealthy investors who had found ways to shield themselves from inflation—40% of investors were now hedging inflation through passive indexing
        </p> <br />
        <p>
        What truly surprised her was the fact that many who didn’t succeed lacked basic financial literacy. Studies showed that millennials adopting passive investing were far better prepared for retirement compared to those who had no investments, highlighting how essential understanding these strategies had become, according to <strong>"Millennials and Retirement: How to Prepare." Bankrate, 2022. </strong>
        </p>
      </div>
      <img
          className="max-w-full h-full object-cover rotate-left"
          src={SPY}
          alt="Income Inequality"
        />
    </div>
  );
};


export default SPReturns;