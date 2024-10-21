import React from 'react';

function ForecastCard({ forecastData }) {
  return (
    <div>
      <p>{new Date(forecastData.dt * 1000).toLocaleDateString()}</p>
      <p>Temperature: {forecastData.main.temp}°C</p>
      <p>Humidity: {forecastData.main.humidity}%</p>
    </div>
  );
}

export default ForecastCard;