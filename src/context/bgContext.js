
import { createContext, useState, useEffect} from "react";

export const BgContext = createContext({
    bgImage: 1,
})

export const BgProvider = ({children}) => {

    const [bgImage, setBgImage] = useState(1);
    
    
    const value = {
        bgImage, setBgImage
    }
    return (
    <BgContext.Provider value={value}>{children}</BgContext.Provider>
    )
}