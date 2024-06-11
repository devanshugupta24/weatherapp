import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
import "./weatherApp.css";

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city:"--",
        feelsLike:"--",
        humidity: "--",
        temp: "--",
        tempMax: "--",
        tempMin: "--",
        weather: "--",
        windSpeed:"--",
    });

    let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
    }
    return(
        <div>
  

            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={weatherInfo} />
        </div>
    );
}