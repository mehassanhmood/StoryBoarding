import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const SuccessStrategies = () => {
  const [cpiData, setCpiData] = useState(null);

  useEffect(() => {
    const fetchCpiData = async () => {
      try {
        const response = await fetch('./cpi_cumulative.json'); // Adjust the path as necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCpiData(data);
      } catch (error) {
        console.error('Error fetching CPI data:', error);
      }
    };

    fetchCpiData();
  }, []);

  // Transform the CPI data for Plotly
  const formatDataForPlot = (data) => {
    const xValues = [];
    const yValues = [];

    for (const [timestamp, value] of Object.entries(data)) {
      xValues.push(new Date(parseInt(timestamp))); // Convert timestamp to Date object
      yValues.push(value);
    }

    return { xValues, yValues };
  };

  return (
    
      <div className="p-4 border rounded-lg shadow-md bg-red-100">
        <h3 className="text-lg font-semibold">Navigating Inflation</h3>
        <p><strong>"How did they do it?" </strong>she wondered, knowing they hadn’t faced the relentless erosion of purchasing power like she and Steve did. Back then, a dollar stretched much further—the cost of housing, education, and food had been far more affordable.</p> <br />
        <p> <strong>The Answer? </strong> . Her parents hadn't experienced the same pressures of inflation or the gap between wages and living costs that seemed to define life for her generation.</p>
      {cpiData ? (
        <Plot
          data={[
            {
              x: formatDataForPlot(cpiData).xValues,
              y: formatDataForPlot(cpiData).yValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: 'orange' },
              name: 'CPI', // Name for the legend
            },
          ]}
          layout={{
            title: 'CPI Over Time',
            xaxis: {
              title: 'Date',
              type: 'date',
            },
            yaxis: {
              title: 'CPI',
            },
            width: 500, // Optional: set a specific width
            height: 300, // Optional: set a specific height
          }}
          config={{ responsive: true }}
        />
      ) : (
        <span className="text-gray-500">Loading CPI data...</span>
      )}
    </div>
  );
};

export default SuccessStrategies;