import React, { useEffect, useRef, useState } from "react";


function FetchChar(){

    const[Char,setChar]=useState([])
    const [newchar,setnewchar]=useState(0)
    let currPage=useRef(1)
    let perPage=10


    useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data)=>{
         setChar(data.results)
      })   
      .catch((err)=>{
        console.log(err)
      })
    },[])

    function next(newpage){
        
           currPage.current=newpage
           
           setnewchar((z)=>z+1)
        
    }

   let first=(currPage.current-1)*perPage
   let last=first+perPage

   let filtered=Char.slice(first,last)
   


   return(
    <div>
        <h3>Characters</h3>
        <div className="cards">
            {filtered.map((x)=>(
                <div key={x.id} className="card">
                    <img src={x.image} alt="" />
                    <p>{x.name}</p>
                </div>
            ))}
        </div>

        <div>
            <button onClick={()=>next(currPage.current-1)}>prev</button>
            <button onClick={()=>next(currPage.current+1)}>next</button>
        </div>
    </div>
   )

}


export default FetchChar