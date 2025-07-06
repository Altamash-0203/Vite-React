import React, { useReducer } from "react";

function CountReducer(){
     let temp={count:0}

     function reduce(state,action){
        if(action.type=="INCREMENT"){
                return{count:state.count+1}
        }
            else if(action.type=="DECREMENT"){
                return{count:state.count-1}
        }
        else{
            return state
        }

     }

     
        let [state,dispatch]=useReducer(reduce,temp)



     return(
        <div>
            <h1>counter</h1>
            <p>count:{state.count}</p>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+1</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-1</button>
        </div>
     )
}

export default CountReducer