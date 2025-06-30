import React, { useState } from "react";

function Parent(){
    
    let [name,setname]=useState("")

    function nameInput(event){
        setname(event.target.value)
    }
function Son({name}){
       return(
        <h1> i am son</h1>
       )
}

function Grandson({name}){
    return(
      <h1>hello {name}</h1>
    )
}
    return(
        <div>

            <input type="text"value={name} onChange={nameInput}  placeholder="Enter user name"/>
            <h1>I am parent</h1>
            <Son name={name}/>
   

            <Grandson name={name}/>
        </div>
    )
}

export default Parent