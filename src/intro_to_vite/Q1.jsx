import React, { useState } from "react";

function Counter({val}){
     let [count,setcount]=useState(val)

     function increment(){
        setcount(count+1)

     }

     function decrement(){
        if(count==0) return alert("Can't go below")
        setcount(count-1)
     }
    return (
        <>
          <h1>Counter</h1>
          <h3>{count}</h3>

          <div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
  </div>
        </>


    )
}

export default Counter