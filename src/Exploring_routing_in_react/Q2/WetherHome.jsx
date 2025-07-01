import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function WeatherHome(){
  let [city,setcity]=useState("")
  let navigate=useNavigate()

  function FindCity(){
    if(city){
        navigate(`/weather/${city}`)
    }
  }

  return(
    <div>
    <h1>check your city weather</h1>
    <input type="text" placeholder="enter city name" value={city} onChange={(e)=>setcity(e.target.value)}/>

    <button onClick={FindCity}>Find</button>
    </div>
  )
}

export default WeatherHome