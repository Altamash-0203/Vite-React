import React, { createContext, useState } from "react";
import { ThemeContext } from "../Q14.jsx/ThemeContext";

export let ThemeContext=createContext()

export function  ThemeCheck({children}){
     let[theme,settheme]=useState('light')

     function changetheme(){
        settheme(theme=="light"?"dark":"light")
     }

     return(
     <ThemeContext.Provider>
        {children}
     </ThemeContext.Provider>
     )
}