import React, { useReducer, useState } from "react";


function CollageForm(){
    let temp={
        name:"",
        launch:"",
        address:{
            building:"",
            street:"",
            city:{
                name:"",
                pincode:""
            }
        },
        states:"",
        courses:[]
    }

    function reduce(state,action){

        if(action.type=="name")return{...state,name:action.payload}
        if(action.type=="launch")return{...state,launch:action.payload}
        if(action.type=="building")return{...state,address:{...state.address,building:action.payload}}
        if(action.type=="street")return{...state,address:{...state.address,street:action.payload}}
        if(action.type=="city-name")return{...state,address:{...state.address,city:{...state.address.city,name:action.payload}}}
        if(action.type=="city-pincode")return{...state,address:{...state.address,city:{...state.address.city,pincode:action.payload}}}
        if(action.type=="states")return{...state,states:action.payload}
        if(action.type=="courses")return{...state,courses:action.payload}
    }

    let [state,dispatch]=useReducer(reduce,temp)
    let [show,setshow]=useState(false)

    return(
        <div>
            <div>
            <h2>collage form</h2>
            <input type="text" placeholder="name" onChange={(e)=>{dispatch({type:"name",payload:e.target.value})}}  />  <br /> <br />
            <input type="text" placeholder="established Year" onChange={(e)=>{dispatch({type:"launch",payload:e.target.value})}}  /> <br /> <br />
            <input type="text" placeholder="Building no" onChange={(e)=>{dispatch({type:"building",payload:e.target.value})}}  /> <br /> <br />
            <input type="text" placeholder="street name" onChange={(e)=>{dispatch({type:"street",payload:e.target.value})}}  /> <br /> <br />
            <input type="text" placeholder="city name" onChange={(e)=>{dispatch({type:"city-name",payload:e.target.value})}}  /> <br /> <br />
            <input type="text" placeholder="city pincode" onChange={(e)=>{dispatch({type:"city-pincode",payload:e.target.value})}}  /> <br /> <br />
            <input type="text" placeholder="state" onChange={(e)=>{dispatch({type:"states",payload:e.target.value})}}  /> <br /> <br />
            <input type="text" placeholder="courses" onChange={(e)=>{dispatch({type:"courses",payload:e.target.value})}}  /> <br /> <br />
            <button onClick={()=>setshow(true)}>submit</button>
        </div>

        <div>
            {show && (
                <div>
                    <h3>your data</h3> 
                    <p>name:{state.name}</p> 
                    <p>Established Year:{state.launch}</p> 
                    <p>building number:{state.address.building}</p> 
                    <p>street name:{state.address.street}</p> 
                    <p>city:{state.address.city.name}</p> 
                    <p>pincode:{state.address.city.pincode}</p> 
                    <p>state:{state.states}</p> 
                    <p>courses:{state.courses}</p>
                 </div>
            )}
        </div>
        </div>
    )

}

export default CollageForm