import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Deatil(){
    let{id}=useParams()
    let [post,setpost]=useState(null)


        useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setpost(data));
  }, [id]);

  if(!post) return alert("loading")

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}


export default Deatil