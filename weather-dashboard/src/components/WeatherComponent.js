import React from 'react';

function WeatherComponent({ data }) {
  return (
    <div className="weather-container">
      <h2 className="weather-header">Current Weather</h2>
      {data ? (
        <div className="weather-info">
          <p>Temperature: {data.main.temp}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Conditions: {data.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default WeatherComponent;
