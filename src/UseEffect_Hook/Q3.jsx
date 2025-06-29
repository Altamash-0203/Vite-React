import React, { useEffect, useState } from "react";


function User({name,email,city}){

     return(
        <>
          <div>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{city}</p>
          </div>
        </>
     )
}

function Usersfetch(){

    let [users,setusers]=useState([])
    let [load,setload]=useState(true)
    let [err,seterr]=useState("")

    useEffect(()=>{
        async function getUser(){
            
            try{
                let res=await fetch("https://jsonplaceholder.typicode.com/users")
            let data=await res.json()
            setusers(data)
            setload(false)

            }
            catch(error){
        seterr(error.message)
        setload(false)
            }
        }
        getUser()

    },[])

    return(
        <>
        <h3>Users Data</h3>

        {load &&<p>Loading...</p>}

        {err && <p>{err}</p>}


        <div>
            {users.map((x)=>(
                <div style={{border:"1px solid cyan",padding:"40px"}}>
                <User key={x.id} name={x.name} email={x.email} city={x.address.city}/>
                </div>
                        ))}
        </div>
        </>
    )

}

export default Usersfetch