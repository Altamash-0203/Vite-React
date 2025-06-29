import React from "react";
import { useState } from "react";

function AutoCorrect(){
    let [text,settext]=useState("")

    const corrections = {
  "teh": "the",
  "recieve": "receive",
  "adress": "address",
  "wierd": "weird",
  "thier": "their"
};

function Check(event){
    let word=event.target.value
    settext(word)

}

function fixed(word){
    let fix=word.split(" ")
    let res=fix.map(a=>corrections[a]||a).join(" ")

    return res
}

let sentence=fixed(text)



let CountWord=text.split(" ").filter(a=>corrections[a]).length


return (
    <>
    <div style={{padding:"40px"}}>
       <h3>WordGPT</h3>

       <input type="text" value={text} onChange={Check} placeholder="Enter text" />
         <br /> <br />
       <b>{sentence}</b>
       <p>fixed word:{CountWord}</p>
    </div>
    
    </>
)
}


export default AutoCorrect