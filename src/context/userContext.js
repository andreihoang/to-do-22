


import { createContext, useState, useEffect} from "react";

export const UserContext = createContext({
    currentUser: {},
})

export const UserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState({});
    console.log(currentUser)
    
    const value = {
        currentUser,
        setCurrentUser
    }
    return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}