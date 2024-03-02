import React, { useState,useEffect } from "react";
import './weather.css';
import search_icon from "../../../images/search.png";
import cloud_icon from "../../../images/cloud.png";
import clear_icon from "../../../images/clear.png";
import drizzle_icon from "../../../images/drizzle.png";
import rain_icon from "../../../images/rain.png";
import snow_icon from "../../../images/snow.png";
import wind_icon from "../../../images/wind.png";
import humidity_icon from "../../../images/humidity.png";
import { FarmerNavbar } from "../../Navbar/navbar";
import Aos from "aos"; // Import CSS file for styling
import 'aos/dist/aos.css';

const Weather = () =>{
    useEffect(()=>{
        Aos.init({duration:2000})
      }, [])

    let api_key="c7fe360effe2f035dcd642d50b532c8e";

    const[wicon,setWicon]= useState(cloud_icon);

    const search = async()=>{
        const element=document.getElementsByClassName("cityInput")
        if(element[0].value==="")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate")
        const temprature= document.getElementsByClassName("weather-temp")
        const location= document.getElementsByClassName("weather-location")

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
        temprature[0].innerHTML=Math.floor(data.main.temp)+"°C";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather==="01n")
        {
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d" || data.weather==="02n")
        {
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d" || data.weather==="03n")
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d" || data.weather==="04n")
        {
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d" || data.weather==="09n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="010d" || data.weather==="010n")
        {
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="013d" || data.weather==="013n")
        {
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }


    }
    return(
        <div>
           <div className="position-fixed w-100" style={{zIndex:"100000"}}>
            <FarmerNavbar/>
        </div>
        <div className="weather-container" data-aos="fade-up">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Search"/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
                </div>
                <div className="weather-image">
                   <img src={wicon} alt="" /> 
                </div>
                <div className="weather-temp">24°C</div>
                <div className="weather-location">London</div>
                <div className="data-container">
                    <div className="w-element">
                        <img src={humidity_icon} alt="" className="w-icon"/>
                        <div className="data">
                            <div className="humidity-percent">64%</div>
                            <div className="w-text">Humidity</div>
                        </div>
                    </div>
                    <div className="w-element">
                        <img src={wind_icon} alt="" className="w-icon"/>
                        <div className="data">
                            <div className="wind-rate">18 km/h</div>
                            <div className="w-text">Wind Speed</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    )
}
export default Weather;