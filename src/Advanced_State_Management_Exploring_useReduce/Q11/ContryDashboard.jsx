import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
function ContryDashboard(){

    let[find,setfind]=useState("")
    let [countries,setcontries]=useState([])
    let status=localStorage.getItem("status")



    useEffect(()=>{
        fetchContry()
    },[])

    function fetchContry(){
        fetch("https://api.first.org/data/v1/countries")
        .then(res=>res.json())
        .then((data)=>{
            let list=Object.values(data.data)
            setcontries(list)
        })
    }

    let filtered=countries.filter((x)=>
        x.country.toLowerCase().includes(find.toLowerCase())
    )


    return(
        <div>
            <h3>Find your country</h3>
            <input type="text" placeholder="Enter country name"  value={find} onChange={(e)=>setfind(e.target.value)}/>

            <ul style={{listStyle:"none"}}>
             {filtered.map((country,idx)=>(
                <li key={idx}>{idx+1}:{country.country}</li>
             ))}
            </ul>       
        </div>
    )
}

export default ContryDashboard