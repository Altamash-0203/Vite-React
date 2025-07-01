import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PostsData(){
    let[posts,setposts]=useState([])
    let [find,setfind]=useState('')

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => setposts(data.posts))
    },[])


    let filtered=posts.filter(post=>
            post.title.includes(find)
        )

    

    return(
        <div>
            <input type="text" placeholder="Find post" value={find} onChange={(e)=>setfind(e.target.value)} />

            <div>
                {filtered.map(x=>(
                    <div className="card">
                        <p>{x.id}</p>
                        <b>{x.title}</b>
                        <Link to={`/post/${x.id}`}>view</Link>
                         
                        </div>
                         
                        
                ))}
            
            </div>
            
        </div>
    )
}

export default PostsData

