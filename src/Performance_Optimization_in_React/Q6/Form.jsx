import React, { useState } from "react";
import UserForm from "./FormHook";

function UserName(){
    let [name,setname]=useState("")
    function input(e){
        setname(e.target.value)
    }
    function check(e){
        e.preventDefault()
        alert(name)
    }
    return(
        <div>
            <input type="text" placeholder="name" value={name} onChange={input} />
            <button onClick={check}>submit</button>
        </div>
    )
}
export default UserName