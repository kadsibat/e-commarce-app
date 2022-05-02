import { createContext, useEffect, useState } from "react";
import { mevcutKullanici } from "../firebase/firebase";

export const AppContext = createContext();


const AppContextProvider = ({children}) =>{
    const [state,setState] = useState(false);
    const [currentUser,setCurrentUser] = useState();
    useEffect(() => {
        mevcutKullanici(setCurrentUser);
    },[]);
    console.log("context", currentUser)
    return(
        <AppContext.Provider value={{state,setState,currentUser}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;