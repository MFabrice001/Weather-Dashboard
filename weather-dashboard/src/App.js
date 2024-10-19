import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WeatherSearch from './components/WeatherSearch';
import WeatherResults from './components/WeatherResults';
import SignUpForms from './components/SignUpForms';

function App() {
  return (
    <div className="App">
      <Navbar />
      <WeatherSearch />
      <WeatherResults />
      <SignUpForms />
    </div>
  );
}

export default App;
