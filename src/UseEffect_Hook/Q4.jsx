import React, { useEffect, useState } from "react";

const beepSound = "https://www.soundjay.com/button/beep-07.wav";

function TimerApp(){
   
    let [sec,setsec]=useState(0)
    let [on,seton]=useState(false)
    let [inter,setinter]=useState(null)
    const [audio] = useState(new Audio(beepSound))
    
    function start(){
        seton(true)
    }

    function stop(){
        seton(false)
        clearInterval(inter)

    }

    function reset(){
        seton(false)
        clearInterval(inter)
        setsec(0)
    }

    function soundon(){
        audio.play()
    }

    useEffect(()=>{
        let id;
        if(on){
            id=setInterval(()=>{
            setsec((last)=>{
                let now=last+1
                if(now==10){
                    soundon()
                }
                return now
            })
},1000)
 setinter(id)
        }
        else{
            clearInterval(inter)
        }
        return()=>clearInterval(id)
    },[on])

    return(
        <div>
            <h4>Timer</h4> <br />
            <b>{sec}</b> <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>stop</button>
                <button onClick={reset}>reset</button>
            </div>
        </div> 
    )
}

export default TimerApp