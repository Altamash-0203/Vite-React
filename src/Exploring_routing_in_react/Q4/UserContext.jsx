import React, { createContext, useContext, useState } from "react";

let UserContext=createContext()

export function UserData({children}){
    let [user,setuser]=useState({name:"babulal",email:"bababhai@gmail.com"})

    function changedata(newUser){
         setuser({...user,...newUser})
    }

    return(
        <UserContext.Provider value={{user,changedata}}>
            {children}
        </UserContext.Provider>
    )
}

export let Person=()=>useContext(UserContext)