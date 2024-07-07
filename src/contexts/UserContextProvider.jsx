import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";


const UserContextProvider=({children})=>{
    const [showContact,setShowContact]=useState(false)
    return(

        <UserContext.Provider value={{showContact,setShowContact}}>
        {children}
        </UserContext.Provider>

    )
}

export default UserContextProvider