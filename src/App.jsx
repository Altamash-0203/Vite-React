import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherDetail from "./Exploring_routing_in_react/Q2/WeartherDetail";
import WeatherHome from "./Exploring_routing_in_react/Q2/WetherHome";


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<WeatherHome/>}/>
        <Route path="/weather/:city" element={<WeatherDetail/>}/>
      </Routes>
    </Router>
  )
}

export default App