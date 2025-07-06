import React, { useReducer } from "react";

function VisiblityReducer(){
    let  temp={status:true}

    function reduce(state,action){
        if(action.type=="SHOW"){
            return {status:!state.status}
        }
    }
    let[state,disptch]=useReducer(reduce,temp)

    return(
        <div>
            <button onClick={()=>disptch({type:"SHOW"})}>{state.status?"hide":"show"}</button>

            {state.status && <h3>Hey user</h3>}
        </div>
    )
}
export default VisiblityReducer