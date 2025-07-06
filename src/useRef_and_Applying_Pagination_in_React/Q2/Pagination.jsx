import React, { useEffect, useState } from "react";

function TodoPagination(){
    let [todo,settodo]=useState([])
    let [currPage,setcurrPage]=useState(1)
    
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => settodo(data))
      .catch((err) => console.error(err))
    },[])

    let allpage=Math.ceil(todo.length/10)

    let first=(currPage-1)*10
    let last=todo.slice(first,first+10)

    function nextPage(page){
      setcurrPage(page)    
    }
    return(
        <div>
            <h3>Todos</h3>

            <ul style={{listStyle:"none",fontFamily:"sans-serif",padding:"40px",margin:"20px"}}>
                {last.map((x)=>(
                    <li key={x.id}>
                        {x.id}:{x.title}
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={()=>nextPage(currPage-1)}>prev</button>
                   
                   {Array.from({length:allpage},(_,i)=>i+1).map((z)=>(
                    <button key={z} onClick={()=>nextPage(z)} style={{backgroundColor:z==currPage?"green":"red"}}>
                       {z}
                    </button>
                   ))}
                   <button onClick={()=>nextPage(currPage+1)}>next</button>
            </div>
        </div>
    )
}






export default TodoPagination