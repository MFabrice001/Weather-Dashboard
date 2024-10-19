import React from 'react';

const WeatherResults = () => {
  // Mock data for now (replace with actual API response)
  const weatherData = {
    city: 'Kigali',
    temperature: '25°C',
    forecast: ['24°C', '26°C', '23°C', '22°C', '28°C', '30°C', '27°C']
  };

  return (
    <div className="weather-results">
      <h2>Weather in {weatherData.city}</h2>
      <p>Current Temperature: {weatherData.temperature}</p>
      <h3>7-Day Forecast</h3>
      <ul>
        {weatherData.forecast.map((temp, index) => (
          <li key={index}>{temp}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherResults;
