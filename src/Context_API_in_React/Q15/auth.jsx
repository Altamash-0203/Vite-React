import { useStatStyles } from "@chakra-ui/react";
import React, { createContext } from "react";

export let AuthContext=createContext()


export function AuthCheck({children}){
   
    let [status,setstatus]=useState(false)

    function changeauth(){
        setstatus(!status)
    }

    return(
        <AuthCheck.Provider>
            {children}
        </AuthCheck.Provider>
    )
}