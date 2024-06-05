import React, { createContext } from "react";

type appContextType = {
    setItems: React.Dispatch<React.SetStateAction<object[]| []>>;
    items:object[]|any;

    setCartItems: React.Dispatch<React.SetStateAction<object[]| []>>;
    cartItems:object[]|any;
    
    showCart:boolean
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<appContextType|undefined>(undefined)

export default AppContext

