import React, { useReducer } from "react";

function ThemeReducer(){
    let temp={theme:"white"}

    function reduce(state,action){
          if(action.type=="TOGGLE")
          {
            return{theme:state.theme=="white"?"black":"white"}
          }
          return state


    }

    let[state,dispatch]=useReducer(reduce,temp)


    return(
        <div style={{backgroundColor:state.theme,color:state.theme=="black"?"white":"black"}}>
            <h1>example of useReducer</h1>
            <button onClick={()=>dispatch({type:"TOGGLE"})}>change Bg</button>
        </div>
    )
}

export default ThemeReducer