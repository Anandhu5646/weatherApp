import React, { useState } from "react";
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
  let api_key = "04570829f210542dabbf91e2264cf929";
  let [weaIcon, setWeaIcon] = useState(cloudIcon);
  let [description,setDescription]= useState("Clear Sky")
  let search = async () => {
    const element = document.getElementsByClassName("searchInput");
    if (element[0].value === "") {
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        let humidity = document.getElementsByClassName("humidity-percent");
        let wind = document.getElementsByClassName("wind-rate");
        let temperature = document.getElementsByClassName("weather-temp");
        let location = document.getElementsByClassName("weather-location");
        console.log(data);
        if (data && data.main) {
          humidity[0].innerHTML = data.main.humidity + " %";
          wind[0].innerHTML = data.wind.speed + " km/hr";
          temperature[0].innerHTML = data.main.temp + "°C";
          location[0].innerHTML = data.name;

          if (data.weather[0].icon == "01d" || data.weather[0].icon == "01n") {
            setWeaIcon(clearIcon);
            setDescription("Clear Sky")
          } else if (
            data.weather[0].icon == "02d" ||
            data.weather[0].icon == "02n"
          ) {
            setWeaIcon(cloudIcon);
            setDescription("Few Clouds")
          } else if (
            data.weather[0].icon == "03d" ||
            data.weather[0].icon == "03n"
          ) {
            setWeaIcon(drizzleIcon);
            setDescription("Scattered Clouds")
          } else if (
            data.weather[0].icon == "13d" ||
            data.weather[0].icon == "13n"
          ) {
            setWeaIcon(snowIcon);
            setDescription("Snow")
          } else if (
            data.weather[0].icon == "10d" ||
            data.weather[0].icon == "10n"
          ) {
            setWeaIcon(rainIcon);
            setDescription("Rain")
          } else if (
            data.weather[0].icon == "04d" ||
            data.weather[0].icon == "04n"
          ) {
            setWeaIcon(drizzleIcon);
            setDescription("Broken Clouds")
          } else if (
            data.weather[0].icon == "09d" ||
            data.weather[0].icon == "09n"
          ) {
            setWeaIcon(rainIcon);
            setDescription("Shower Rain")
          } else {
            setWeaIcon(clearIcon);
            setDescription("Clear Sky")
          }
        } else {
          console.error("Invalid data format from the API");
        }
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="Search" className="searchInput" />
        <div className="search-icon" onClick={() => search()}>
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <div>
          <img src={weaIcon} alt="" />
        </div>
        <div className="weather-des">
          <h5>{description}</h5>

        </div>
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="elements">
          <img src={humidityIcon} alt="" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="elements">
          <div>
            <img src={windIcon} alt="" />
          </div>
          <div className="data">
            <div className="wind-rate">18 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
