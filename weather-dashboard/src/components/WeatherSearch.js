import React, { useState } from 'react';

const WeatherSearch = () => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    // Fetch weather data here (e.g., using OpenWeather API)
    console.log(`Searching weather for ${city}`);
  };

  return (
    <div className="weather-search">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default WeatherSearch;
