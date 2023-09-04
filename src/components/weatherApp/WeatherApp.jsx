 import React from 'react'
 import searchIcon from '../../assets/search.png'
 import clearIcon from '../../assets/clear.png'
 import cloudIcon from '../../assets/cloud.png'
 import drizzleIcon from '../../assets/drizzle.png'
 import humidityIcon from '../../assets/humidity.png'
 import rainIcon from '../../assets/rain.png'
 import windIcon from '../../assets/wind.png'
 import snowIcon from '../../assets/snow.png'
 import './WeatherApp.css'


 const WeatherApp = () => {
   return (
     <div className='container'>
        <div className='top-bar'>
       <input type="text" placeholder='search'  />
       <div className='search-icon'>
        <img src={searchIcon} alt="" />
       </div>
        </div>
     </div>
   )
 }
 
 export default WeatherApp
 