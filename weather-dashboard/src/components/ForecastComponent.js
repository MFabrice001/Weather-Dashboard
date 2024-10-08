import React from 'react';

function ForecastComponent({ forecast }) {
  return (
    <div className="forecast-container">
      <h2>7-Day Forecast</h2>
      {forecast.length > 0 ? (
        forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>Day {index + 1}: {day.temp.day}°C</p>
          </div>
        ))
      ) : (
        <p>Loading forecast...</p>
      )}
    </div>
  );
}

export default ForecastComponent;
