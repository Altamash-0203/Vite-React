import React, { useRef, useState } from "react";

function FocusElement(){
    let ref=useRef("")
    let [show,setshow]=useState(false)

    function focus(){
        ref.current.focus()
        ref.current.style.backgroundColor = "red";
        setshow(true)
    }

    return (
        <div>
            <input type="text" ref={ref}/> <br />
            {show && <p>Your data is submitted</p>} <br />
            <button onClick={focus}>submit</button>

        </div>
    )
}

export default FocusElement