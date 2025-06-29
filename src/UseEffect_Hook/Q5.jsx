import React, { useEffect, useState } from "react";

function CountEffect(){

    let [count,setcount]=useState(0)

    useEffect(()=>{
        let time=setTimeout(() => {
            setcount(count+1)
        }, 1000);

        return ()=> clearTimeout(time)
    },[count])

    return (
        <div>
            <h1>counter</h1>
        <p>{count}</p>
        </div>

    )
}

export default CountEffect