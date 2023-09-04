import React from "react";
import searchIcon from "../../assets/search.png";
import clearIcon from "../../assets/clear.png";
import cloudIcon from "../../assets/cloud.png";
import drizzleIcon from "../../assets/drizzle.png";
import humidityIcon from "../../assets/humidity.png";
import rainIcon from "../../assets/rain.png";
import windIcon from "../../assets/wind.png";
import snowIcon from "../../assets/snow.png";
import "./WeatherApp.css";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="Search" />
        <div className="search-icon">
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <div><img src={cloudIcon} alt="" />
        </div>
      </div>
      <div className="weather-temp">24&#8451;</div>
    <div className="weather-location">London</div>
    <div className="data-container">
        <div className="element">
            <img src={humidityIcon} alt="" />
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
            </div>

        </div>
        <div className="element">
            <div>

            <img src={windIcon} alt="" />
            </div>
            <div className="data">
                <div className="humidity-percent">18 km/hr</div>
                <div className="text">Wind Speed</div>
            </div>

        </div>
    </div>
    </div>
  );
};

export default WeatherApp;
