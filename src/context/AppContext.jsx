import { createContext, useState } from "react";

export const AppContext = createContext();


const AppContextProvider = ({children}) =>{
    const [state,setState] = useState(false)
    return(
        <AppContext.Provider value={{state,setState}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;