import { createStore } from 'redux';
let temp={count:0}

let inc="increment"
let dec="decrement"


export let plusone=()=>({type:inc})
export let minusone=()=>({type:dec})

function checkcount(state=temp,action){
     if(action.type=="increment"){
        return{count:state.count+1}
     }
     else if(action.type=="decrement")
     {
        return{count:state.count-1}
     }
    }
      export const store=createStore(checkcount)

      export default store