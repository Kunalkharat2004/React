/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AppContext = createContext({
    handleSideBarOpen:()=>{}
}) 

const AppContextProvider = ({children})=>{
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSideBarOpen =  ()=>{
        
    }

    return( 
    
    <AppContext.Provider value={{handleSideBarOpen}}>
        {children}
    </AppContext.Provider>
    )
}
export default AppContextProvider;