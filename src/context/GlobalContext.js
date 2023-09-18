import React from "react";

const GlobalContext = React.createContext({
    activeSection : 0,
    setActiveSection : ()=>{},
    inputData : 0,
    setInputData : ()=>{}
})

export default GlobalContext