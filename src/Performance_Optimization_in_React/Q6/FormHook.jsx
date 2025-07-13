import React, { useState } from "react";

function UserForm(temp){
    let [user,setuser]=useState(temp)

    function check(e){
        setuser(e.target.value)
    }
    return [user,check]
}

export default UserForm