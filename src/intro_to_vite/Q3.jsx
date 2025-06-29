
import React from "react";

function ProfileCard({name="Shaikh Altamash",age=21,bio="frontend devloper"}){

    let cut=bio.length>100?bio.substring(0,100)+"...Read More":bio


    return(
        <>
    <style>
        {`
          .card{
          border:1px solid gray;
          
          gap:30px;

          }
        `}
    </style>
        <div className="card">
            <h3>Name:  {name}</h3>
            <b>Age:   {age}</b>
            <p>Bio:   {cut}</p>
        </div>

        </>
    )
}

export default ProfileCard