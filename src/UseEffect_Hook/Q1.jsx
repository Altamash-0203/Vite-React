import React, { useEffect, useState } from "react";


function Box({color}){
    let bg=color=="dark"

      return (
        
        <div style={{backgroundColor:bg?"black":"white",color:bg?"white":"black",padding:"40px"}}>
          React is intresting....
          
        </div>
      )
}

function BgApp(){
    let [bg,setbg]=useState("light")

    useEffect(()=>{
        let curr=localStorage.getItem("bgColor")

        if(curr)setbg(curr)
    },[])

    useEffect(()=>{
      localStorage.setItem("bgColor",bg)
    },[bg])

   let Check=()=>{
    setbg(bg=="light"?"dark":"light")
   }


   return(
    <div>
        
        <button onClick={Check}>{bg}</button>
        <Box color={bg}/>
        <br/>
        <Box color={bg}/>
        <br />
        <Box color={bg}/>
    
    </div>
   )
}

export default BgApp
