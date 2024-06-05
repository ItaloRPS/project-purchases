import { ReactNode, useState } from 'react'
import AppContexts from './AppContext.'

type appProviderProps = {
    children: ReactNode;
}

export const AppProvider = ({ children }:appProviderProps) => {
    const [items, setItems] = useState<object[]|[]>([])
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState<object[]| []>([])

    return (
        <AppContexts.Provider value={{
            setItems, 
            items, 
            showCart, 
            setShowCart,
            cartItems,
            setCartItems}}>
            { children }
        </AppContexts.Provider>
    )
}
