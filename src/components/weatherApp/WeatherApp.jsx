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

    let api_key="04570829f210542dabbf91e2264cf929"
    let search = async () => {
        const element = document.getElementsByClassName('searchInput');
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
              humidity[0].innerHTML = data.main.humidity+" %";
              wind[0].innerHTML = data.wind.speed+" km/hr";
              temperature[0].innerHTML = data.main.temp+"°C";
              location[0].innerHTML = data.name;
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
        <input type="text" placeholder="Search"  className="searchInput"/>
        <div className="search-icon" onClick={()=>search()}>
          <img src={searchIcon} alt=""   />
        </div>
      </div>
      <div className="weather-image">
        <div><img src={cloudIcon} alt="" />
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
