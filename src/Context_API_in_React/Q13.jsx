import React, { createContext, useState } from "react";

let statusContext=createContext()

function ContextApp(){
    let [status,setstatus]=useState('false')


    function InOut(){
        setstatus(!status)
    }

    return(
      <statusContext.Provider value={{status,setstatus}} >
           <div style={{border:"1px solid gray", padding:"20px",gap:"30px"}}>
            <nav style={{border:"1px solid gray"}}>
                <p>NAV</p>
                <button onClick={InOut}>{status?"LogOut":"LogIn"}</button>
            </nav>
               <br />
            <main style={{border:"1px solid gray"}}>
                <p>MAIN</p>
                <h1>
                    
                    {status?"Welcome User":"Login First"}
                </h1>
            </main>
             <br />
            <footer style={{border:"1px solid gray"}}>
                <p>FOOTER</p>
                <b>{status?"welcome user":"login first"}</b>
            </footer>
           </div>
      </statusContext.Provider>
    )
}

export default ContextApp