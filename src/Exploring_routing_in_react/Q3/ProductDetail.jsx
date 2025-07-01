import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail(){
    let {id}=useParams()
    let [pro,setpro]=useState(null)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setpro(data))

    },[id])

    if(!pro){
        return <div> Loading....</div>
    }

    return(
        <div>
            <h4>{pro.name}</h4>
            <img src={pro.image} alt="" width={200} />
            <p>{pro.description}</p>
            <p>{pro.price}</p>
        </div>
    )
}

export default ProductDetail