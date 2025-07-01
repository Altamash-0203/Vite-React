import React, { createContext, useState } from "react";


let bgTheme=createContext()

function Contextbg(){
    let [bg,setbg]=useState('light')

    function change(){
        setbg(bg=="light"?"dark":"light")
    }

    return (
        <bgTheme.Provider value={{bg,setbg}}>
           <div>
            <h1 style={{color:bg=="light"?"gray":"red"}}>Context Example</h1>
           </div>
           <button onClick={change}>chnage</button>
        </bgTheme.Provider>
    )
}

export default Contextbg