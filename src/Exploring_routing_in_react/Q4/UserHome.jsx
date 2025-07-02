import React from "react";
import { Link } from "react-router-dom";

function UserHome(){
    return(
        <div>
           <h3> Welcome to home </h3>

           <Link to="/profile">Profile</Link>
           <br />
           <Link to="/setting">Setting</Link>
        </div>
    )
}
export default  UserHome