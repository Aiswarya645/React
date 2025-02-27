import React, { useState } from 'react'
import axios from 'axios'
import './weather.css'
import bgimg  from'../datafetching/wea.jpg';

const Weather = () => {
    const [data,setdata]=useState(null)
    const[search,setsearch]=useState("")


    const weatherdata =async()=>{
      try{
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=0cf3d05c6cb443424f42856d18e090b3`)
        setdata(response.data)
        console.log(response);
        
      }
      catch (error) {
        console.error("Error fetching weather data:", error);
        setdata(null); 
    }
  };
      const handlechange=(event)=>{
        setsearch(event.target.value)
      }
      const handlesubmit=(event)=>{
        event.preventDefault()
        weatherdata();
      }  
  return (
    <div className='main' style={{ backgroundImage: `url(${bgimg})` }}>

    
    <form onSubmit={handlesubmit}>
        <label htmlFor="city" style={{ fontSize: '25px',fontFamily: 'italic'  }} >City  : </label>
        <input type="text" id="city" value={search} onChange={handlechange} placeholder='Enter the city' /><br></br><br></br>
        
        <button type='submit'>submit</button><br></br><br></br>
    </form>
    {data &&  (
                <div>
                    <h2>Weather in {data.name}</h2>
                    <p>Temperature: {data.main.temp}°F</p>
                    <p>Weather: {data.weather[0].description}</p>
                    <p>Degree: {data.wind.deg}°</p>
                    <p>speed:{data.wind.speed}m/s</p>
                    <p>Country:{data.sys.country}</p>
                    <p>Feels like:{data.main.feels_like}°F</p>
                    <p>Min Temp:{data.main.temp_min}°F</p>
                    <p>Visibility: {data.visibility} meters</p>
                    <p>Timezone: {data.timezone} seconds</p>
                    <p>Station: {data?.base}</p>
                    <p>Lat :{data.coord.lat}°F</p>
                    <p>Lon :{data.coord.lon}°F</p>
                    



                    
                </div>
            )}
    </div>
  )
}

export default Weather