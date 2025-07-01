import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";


function WeatherDetail(){

    let {city}=useParams()
    let [datail,setdeatail]=useState(null)

    useEffect(()=>{
        let apikey="f5710b3095b47ebb92d6c73aba3bd721"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
        .then(res=>res.json())
        .then(data=>
        setdeatail(data))
    },[city])

    if(!datail) return alert("Loading city")

   return (
    <div>
        <h1> {city}</h1>
        <b>temeprature:{datail.main.temp}</b>
        <p>Humidity:{datail.main.humidity}</p>
    </div>
   )
    }

    export default WeatherDetail