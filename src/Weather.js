import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Sydney",
    temperature: "26",
    date: "Friday, 10:34am",
    description: "Sunny Intervals",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    humidity: "58",
    wind: "6",
  };

  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="🔍" className="btn btn-light w-50" />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last Updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
            {weatherData.temperature}
            <span className="units">°C </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <i>Feels Like 24°C</i>
            </li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind Speed: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
