import React, { useState, useEffect } from 'react';
import WeatherComponent from './components/WeatherComponent';
import ForecastComponent from './components/ForecastComponent';
import './styles.css'; // Importing custom styles

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState('');

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);

      // Fetch 7-day forecast
      const { lat, lon } = data.coord;
      const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=YOUR_API_KEY`);
      const forecastData = await forecastResponse.json();
      setForecastData(forecastData.daily);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchWeatherData('Kigali'); // Fetch initial data for a city
  }, []);

  return (
    <div className="app-container">
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          <WeatherComponent data={weatherData} />
          <ForecastComponent forecast={forecastData} />
        </>
      )}
    </div>
  );
}

export default App;
