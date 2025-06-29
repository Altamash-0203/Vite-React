import React, { useEffect, useState } from "react";


function Quotes(){

    let [quote,setquote]=useState("")
    let [load,setload]=useState(false)


   async function fetchQuote(){
    setload(true)

    try{
        let res=await fetch("https://quotes-api-self.vercel.app/quote")

        let data=await res.json()
        //    console.log(data)
        setquote(data.quote)
        // console.log(quote)
        setload(false)
    }
    catch(error){
        console.log(error.message)
        setload(false)
    }
   }
   
       useEffect(()=>{
           fetchQuote()

           let wait=setInterval(() => {
            fetchQuote()
           }, 30000);
         
           return()=>clearInterval(wait)
       },[])

      
       return(

       <>
       <div>
        {load && <p>Loading...</p>}
       </div>
         <div>
              <h3>{quote}</h3>
         </div>
         <button onClick={fetchQuote}>
            new 
         </button>
       </>

       )
}

export default Quotes