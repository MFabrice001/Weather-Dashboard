import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ForecastCard from './ForecastCard';

function Forecast() {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=YOUR_API_KEY`);
        setForecastData(response.data.list);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForecastData();
  }, []);

  return (
    <div>
      {forecastData && forecastData.map((item) => (
        <ForecastCard key={item.dt} forecastData={item} />
      ))}
    </div>
  );
}

export default Forecast;