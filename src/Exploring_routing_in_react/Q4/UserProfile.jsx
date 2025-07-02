import React from "react";
import { Person } from "./UserContext";


function UserProfile(){
    let {user}=Person()

    return(
        <div>
            <h1>Profile</h1>
            <b>Name:{user.name}</b> <br />
            <b>Email:{user.email}</b>
        </div>
    )
}


export default UserProfile