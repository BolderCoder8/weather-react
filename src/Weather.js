import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Tuesday, 8:45pm</li>
        <li>Showers</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png"
              alt="Showers"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">20</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 65%</li>
            <li>Wind Speed: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
