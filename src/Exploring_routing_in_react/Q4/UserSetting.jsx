import React, { useState } from "react";
import { Person } from "./UserContext";
import { useNavigate } from "react-router-dom";


function UserSetting(){
    let {user,changedata}=Person()
    let [name,setname]=useState(user.name)
    let [mail,setmail]=useState(user.email)
    let navigate=useNavigate()


    function ChangeData(){
        changedata({name,email:mail})
        navigate("/profile")
    }

    return(
        <div>
            <h1>Setting</h1>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter name" />
            <input type="text" value={mail} onChange={(e)=>setmail(e.target.value)} placeholder="Enter Email" />
            <button onClick={ChangeData}>Update</button>
        </div>
    )
}

export default UserSetting