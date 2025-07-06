import React, { } from "react";

function ContryLogin(){

     function status(){
       localStorage.setItem('status',true)
     }
    return(
        <div>
            <input type="text" placeholder="name"/> <br />
            <input type="text" placeholder="password"/> <br />
            <button onClick={status}>submit</button>
        </div>
    )
}
export default ContryLogin