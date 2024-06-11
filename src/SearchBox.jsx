import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";
import { color } from '@mui/system';

export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let [error,setError]=useState(false);
    const  API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0d3bb62336f371cd8fe9c4b051c8f65c"; 
    
    let getWeatherInfo=async()=>{
        try{ let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
         city:city, 
         temp:jsonResponse.main.temp,
         tempMin:jsonResponse.main.temp_min,
         tempMax:jsonResponse.main.temp_max,
         humidity:jsonResponse.main.humidity,
         feelsLike:jsonResponse.main.feels_like,
         weather:jsonResponse.weather[0].description,
         windSpeed:jsonResponse.wind.speed,
        };
     console.log(result);
     return result;
 }catch(err){
   throw err;
 }};
      


    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }; 

    let handleSubmit=async(evt)=>{
        try{ evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
       
    };
    
    return(
        <div>
           
            <form onSubmit={handleSubmit}>
        <TextField
             id="city"
             label="City" 
             variant="outlined" 
             required
             value={city}
             onChange={handleChange}
             size="small"
             InputLabelProps={{className:"label"}}
             color="success"
             sx={{input:{color:'rgb(229, 232, 229)'}}}  
           
/>
  <br></br>
            <Button id="click" variant="contained" type="submit" size="small" >Search</Button>
           
            </form>
        </div>
    );
}