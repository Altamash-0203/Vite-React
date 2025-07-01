import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Exploring_routing_in_react/Q1/nav"
import PostsData from "./Exploring_routing_in_react/Q1/post"
import Deatil from "./Exploring_routing_in_react/Q1/deatil"
import About from "./Exploring_routing_in_react/Q1/about"

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<PostsData/>}/>
        <Route path="/post/:id" element={<Deatil/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
}

export default App