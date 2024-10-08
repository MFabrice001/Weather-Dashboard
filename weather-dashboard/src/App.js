import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your real API key from OpenWeather
    const currentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );
    const currentWeatherData = await currentWeatherResponse.json();
    setCurrentWeather(currentWeatherData);

    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=7&appid=${apiKey}`
    );
    const forecastData = await forecastResponse.json();
    setForecast(forecastData);
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <div>
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Get Weather</button>
      </div>
      {currentWeather && (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {currentWeather.main.temp}°C</p>
          <p>Condition: {currentWeather.weather[0].description}</p>
        </div>
      )}
      {forecast && (
        <div>
          <h2>7-Day Forecast</h2>
          {forecast.list.map((day, index) => (
            <div key={index}>
              <p>Day {index + 1}: {day.weather[0].description}</p>
              <p>Temperature: {day.temp.day}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

