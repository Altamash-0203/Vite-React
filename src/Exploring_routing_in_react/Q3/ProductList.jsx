import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList(){
  let[products,setproducts]=useState([])
  let [filterpro,setfilterpro]=useState([])
  let [sort,setsort]=useState("asc")

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>{
        setproducts(data.products)
        setfilterpro(data.products)
        
    })
  },[])


  useEffect(()=>{
    let sorted=filterpro.sort((a,b)=>sort=='asc'?a.price-b.price:b.price-a.price)
    setfilterpro(sorted)
  },[sort,products,filterpro])


  return(
    <div>
        <h1>Ekart shopee</h1>
        <select onChange={e=>setsort(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="dec">decending</option>
        </select>

        <div className="products">
             {filterpro.map(p=>(
                <div key={p.id}>
                   <img src={p.image} width={100} />
                   <b>{p.name}</b>
                   <p>{p.price}rs</p>
                   <Link to={`/product/${p.id}`}>Detail</Link>
                </div>
             ))}
        </div>
    </div>
  )
}

export default ProductList