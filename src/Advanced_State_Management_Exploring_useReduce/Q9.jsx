import React, { useReducer, useState } from "react";

function FormReducer(){



let temp={email:"",pass:""}

function reduce(state,action){
    
    if(action.type=="email") return {...state,email:action.payload}
    if(action.type=="pass") return {...state,pass:action.payload}
}

let [state,dispatch]=useReducer(reduce,temp)
let [show,setshow]=useState(false)


return(
    <div>
        <h1>form</h1>

        <input type="text" placeholder="email" value={state.email} onChange={(e)=>dispatch({type:"email",payload:e.target.value})} /> <br />
        <input type="text" placeholder="password" value={state.pass} onChange={(e)=>dispatch({type:"pass",payload:e.target.value})} /> <br />
        <button onClick={()=>setshow(true)}>submit</button>


        <div>
            {show && state.email && state.pass?(
                <div>
                    <p>mail:{state.email}</p>
                    <p>password:{state.pass}</p>
                </div>
            ):
            (<div>Invalid data</div>)}
        </div>
    </div>
)
}

export default FormReducer