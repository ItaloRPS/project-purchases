'use client'
import { ItensProps } from '@/common/Types/ItemType';
import { ReactNode, useEffect, useState } from 'react'
import AppContexts from './AppContext.'
import Cookies from 'js-cookie';
type appProviderProps = {
    children: ReactNode;
}

type cartItemProp ={
    item:ItensProps
  }
  
export const AppProvider = ({ children }:appProviderProps) => {
    const [items, setItems] = useState<object[]|[]>([])
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState<object[]| []>([])

    useEffect(() => {
        const savedItems = Cookies.get('items');
        if (savedItems) {
            setCartItems(JSON.parse(savedItems));
        }
    }, []);

    const setCartItemsCookies = (items:object[]|[])=>{
        Cookies.set('items', JSON.stringify(items));
        setCartItems(items)
    }
    return (
        <AppContexts.Provider value={{
            setItems, 
            items, 
            showCart, 
            setShowCart,
            cartItems,
            setCartItems:setCartItemsCookies}}>
            { children }
        </AppContexts.Provider>
    )
}
