import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

import "./InfoBox.css";

export default function InfoBox({info}){

    


   
    return(
  /*      <div className="InfoBox">

            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 100 }}
        image={info.humidity>85 ? RAIN_URL :info.temp>20 ? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent className="page" >
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {" "}{info.humidity>85 ? (<ThunderstormIcon/>) :info.temp>20 ? (<WbSunnyIcon/>):(<AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" color="black" component={"span"} >
          <p>Temp={info.temp}&deg;C &nbsp;&nbsp; Feels like {info.feelsLike}&deg;C</p>
          <p>Wind Speed={info.windSpeed} &nbsp;&nbsp; Humidity={info.humidity}</p>
        
        </Typography>
      </CardContent>
     
    </Card>
  
        </div>
        */



        <div className="InfoBox">

          <p className='temp'>{info.temp}&deg;C </p>
         <div className='temp_city'>
           <div className='icon'>{info.humidity>85 ?
            (<ThunderstormIcon fontSize='large'/>) 
            :info.temp<10 ? (<AcUnitIcon fontSize='large' />)
            :info.temp<35?(< WbTwilightIcon fontSize='large'/>)
            :(<WbSunnyIcon fontSize='large'/>)
            }
           </div>
         <div className='city_name'>{info.city}</div>
         </div>


      <p>{info.humidity>85 ? 
       <img className="image"src="https://images.unsplash.com/photo-1433863448220-78aaa064ff47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnl8ZW58MHx8MHx8fDA%3D"/>
       :info.temp<10? <img className="image" src="https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
       :info.temp<35?<img className='image' src="https://tse4.mm.bing.net/th?id=OIP.I-e7gO5AuLyZDQBYzvqUwwHaEo&pid=Api&P=0&h=180"/>
       :<img className="image"src="https://tse2.mm.bing.net/th?id=OIP.U2hqhn4qn43jKGTlurfc9QHaEK&pid=Api&P=0&h=180"/>
       }
      </p>

      

        
    <p className='infos'>
      Feels like {info.feelsLike}&deg;C <br></br>
      Wind Speed={info.windSpeed}km/h <br></br> Humidity={info.humidity}%
    </p>
        </div>
    );
}