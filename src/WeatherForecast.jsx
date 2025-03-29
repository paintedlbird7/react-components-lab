// src/components/WeatherForecast/WeatherForecast.jsx
import React from 'react';
import './WeatherForecast.css';  // Importing the CSS file for styling

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={img} alt={imgAlt} />
      <p><span>Conditions: </span>{conditions}</p>
      <p><span>Time: </span>{time}</p>
    </div>
  );
};

export default WeatherForecast;

