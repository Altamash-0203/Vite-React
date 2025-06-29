import React, { useState } from "react";

function OnOff(){

    let [On,setOn]=useState(true)

    function Check(){
        setOn(!On)
    }

    return(

        <button onClick={Check} style={{backgroundColor:On?"green":"red"}}>
            {On?"ON":"OFF"}
        </button>
    )

}

export default OnOff